import { ImageResponse } from 'next/og'

export const alt = 'Youssef Bastawisy — AI Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        background: '#0a0a0a',
        padding: '72px',
        fontFamily: 'sans-serif',
        position: 'relative',
      }}
    >
      {/* accent glow */}
      <div
        style={{
          position: 'absolute',
          top: -160,
          right: -120,
          width: 520,
          height: 520,
          borderRadius: 9999,
          background: '#4f46e5',
          opacity: 0.25,
          filter: 'blur(90px)',
          display: 'flex',
        }}
      />

      {/* top: badge + name */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 16,
            background: '#4f46e5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: 30,
            fontWeight: 700,
          }}
        >
          YB
        </div>
        <div style={{ color: '#9ca3af', fontSize: 28, fontWeight: 500 }}>
          youssef-bastawisy.vercel.app
        </div>
      </div>

      {/* middle: headline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <div style={{ color: 'white', fontSize: 78, fontWeight: 700, lineHeight: 1.05 }}>
          Youssef Bastawisy
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            color: '#a5b4fc',
            fontSize: 40,
            fontWeight: 600,
          }}
        >
          AI Engineer
        </div>
        <div style={{ color: '#9ca3af', fontSize: 32, fontWeight: 400, maxWidth: 900 }}>
          Production-ready agentic AI systems — LLMs · RAG · Multi-agent orchestration
        </div>
      </div>

      {/* bottom: accent bar */}
      <div
        style={{
          display: 'flex',
          width: 220,
          height: 8,
          borderRadius: 9999,
          background: '#4f46e5',
        }}
      />
    </div>,
    { ...size }
  )
}
