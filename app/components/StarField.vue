<script setup lang="ts">
interface Star {
  x: number
  y: number
  r: number
  opacity: number
  twinklePhase: number
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
let animFrame = 0

onMounted(() => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  const stars: Star[] = []
  const STAR_COUNT = 180

  const resize = () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  const seed = () => {
    stars.length = 0
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2 + 0.2,
        opacity: Math.random() * 0.5 + 0.1,
        twinklePhase: Math.random() * Math.PI * 2,
      })
    }
  }

  const handleResize = () => {
    resize()
    seed()
  }

  resize()
  seed()
  window.addEventListener('resize', handleResize)

  // Respect reduced-motion: draw a static field, skip the animation loop
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let t = 0
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    t += 0.012

    for (const s of stars) {
      const twinkle = reduceMotion ? 1 : 0.5 + 0.5 * Math.sin(t + s.twinklePhase)
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(240, 235, 220, ${s.opacity * twinkle})`
      ctx.fill()
    }

    if (!reduceMotion) animFrame = requestAnimationFrame(draw)
  }
  draw()

  onBeforeUnmount(() => {
    cancelAnimationFrame(animFrame)
    window.removeEventListener('resize', handleResize)
  })
})
</script>

<template>
  <canvas id="starfield" ref="canvasRef" aria-hidden="true" />
</template>
