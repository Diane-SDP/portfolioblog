'use client'
import * as React from 'react'
import { YStack } from 'tamagui'

export function Blob({
  minHeight = 520,
  style,
}: {
  minHeight?: number
  style?: React.CSSProperties
}) {
  const target = React.useRef({ x: 0, y: 0 })
  const lerped = React.useRef({ x: 0, y: 0 })
  const [, force] = React.useState(0)
  const rectRef = React.useRef<DOMRect | null>(null)
  const containerRef = React.useRef<HTMLDivElement | null>(null)

  // calcule la taille/position du conteneur une fois monté
  React.useLayoutEffect(() => {
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect()
    }
  }, [])

  // écoute globale (partout dans la fenêtre)
  React.useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const rect = rectRef.current
      if (!rect) return
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1
      const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1
      target.current.x = nx
      target.current.y = ny
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  // boucle d’animation (lerp)
  React.useEffect(() => {
    let raf = 0
    const tick = () => {
      lerped.current.x += (target.current.x - lerped.current.x) * 0.12
      lerped.current.y += (target.current.y - lerped.current.y) * 0.12
      force((n) => n + 1)
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const t = (factor: number) =>
    `translate(${lerped.current.x * factor}px, ${lerped.current.y * factor}px)`

  return (
    <YStack
      mt={'$5'}
      ref={containerRef}
      position="relative"
      flex={1}
      minHeight={minHeight}
      width="100%"
      alignItems="center"
      justifyContent="center"
      style={style}
    >
      {/* Blob 1 (jaune/violet) */}
      <YStack
        position="absolute"
        right={0}
        top={40}
        width={520}
        height={520}
        filter="blur(22px)"
        opacity={0.9}
        pointerEvents="none"
      >
        <svg viewBox="0 0 600 600" width="100%" height="100%" style={{ transform: t(34) }}>
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="hsl(48 95% 70%)" />
              <stop offset="100%" stopColor="hsl(275 85% 62%)" />
            </radialGradient>
          </defs>
          <g style={{ mixBlendMode: 'screen' }}>
            <path
              fill="url(#g1)"
              d="M303 66c69 7 140 33 170 95 31 62 13 152-31 210-44 57-111 82-179 89-68 6-136-6-173-50-38-45-44-122-16-182 28-61 89-106 153-133 64-27 129-36 176-29Z"
            />
          </g>
        </svg>
      </YStack>

      {/* Blob 2 (bleu/teal) */}
      <YStack
        position="absolute"
        right={160}
        top={0}
        width={420}
        height={420}
        filter="blur(22px)"
        opacity={0.85}
        pointerEvents="none"
      >
        <svg viewBox="0 0 600 600" width="100%" height="100%" style={{ transform: t(24) }}>
          <defs>
            <radialGradient id="g2" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="hsl(202 90% 65%)" />
              <stop offset="100%" stopColor="hsl(180 70% 55%)" />
            </radialGradient>
          </defs>
          <g style={{ mixBlendMode: 'screen' }}>
            <path
              fill="url(#g2)"
              d="M221 84c58-9 119 15 160 55 41 39 62 94 47 141-16 47-67 86-125 103-58 17-122 12-168-17-46-28-74-80-66-126 8-46 53-86 102-114 49-28 92-43 150-42Z"
            />
          </g>
        </svg>
      </YStack>

      {/* Blob 3 (rose/orange) */}
      <YStack
        position="absolute"
        right={60}
        top={220}
        width={360}
        height={360}
        filter="blur(22px)"
        opacity={0.8}
        pointerEvents="none"
      >
        <svg viewBox="0 0 600 600" width="100%" height="100%" style={{ transform: t(18) }}>
          <defs>
            <radialGradient id="g3" cx="50%" cy="50%" r="65%">
              <stop offset="0%" stopColor="hsl(330 85% 70%)" />
              <stop offset="100%" stopColor="hsl(18 90% 60%)" />
            </radialGradient>
          </defs>
          <g style={{ mixBlendMode: 'screen' }}>
            <path
              fill="url(#g3)"
              d="M210 120c45-23 103-25 155-7s95 57 104 98c10 41-16 89-58 121-42 33-100 50-156 47-56-3-111-27-137-64s-23-86 1-121c24-35 69-51 91-74Z"
            />
          </g>
        </svg>
      </YStack>
    </YStack>
  )
}
