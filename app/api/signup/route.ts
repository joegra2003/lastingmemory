import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check for duplicates
    const { data: existing } = await supabase
      .from("lastingmemory_signups")
      .select("id")
      .eq("email", normalizedEmail)
      .maybeSingle();

    if (existing) {
      // Treat duplicate as success — no need to alarm the user
      return NextResponse.json({ success: true, duplicate: true });
    }

    const { error } = await supabase.from("lastingmemory_signups").insert({
      email: normalizedEmail,
      signed_up_at: new Date().toISOString(),
      source: "landing_v1",
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json({ error: "Could not save your email. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Signup error:", err);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
