'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl')
    if (!gl) return

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }
    resize()
    window.addEventListener('resize', resize)

    const vert = `
      attribute vec2 position;
      void main() { gl_Position = vec4(position, 0.0, 1.0); }
    `
    const frag = `
      precision mediump float;
      uniform float time;
      uniform vec2 resolution;
      void main() {
        vec2 uv = gl_FragCoord.xy / resolution;
        float wave = 0.0;
        for(float i = 1.0; i <= 4.0; i++) {
          wave += sin(uv.x * 3.14159 * i * 2.0 + time * 0.3 * i) * (0.03 / i);
        }
        float hill = 0.35 + wave;
        float ground = smoothstep(hill - 0.008, hill + 0.008, uv.y);
        vec3 skyCol = mix(vec3(0.03, 0.03, 0.03), vec3(0.06, 0.05, 0.04), uv.y);
        vec3 groundCol = vec3(0.05, 0.04, 0.03);
        vec3 col = mix(groundCol, skyCol, ground);
        gl_FragColor = vec4(col, 1.0);
      }
    `

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return s
    }

    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vert))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, frag))
    gl.linkProgram(prog)
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER,
      new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),
      gl.STATIC_DRAW)

    const pos = gl.getAttribLocation(prog, 'position')
    gl.enableVertexAttribArray(pos)
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0)

    const uTime = gl.getUniformLocation(prog, 'time')
    const uRes  = gl.getUniformLocation(prog, 'resolution')

    let raf: number
    const draw = (t: number) => {
      gl.uniform1f(uTime, t * 0.001)
      gl.uniform2f(uRes, canvas.width, canvas.height)
      gl.drawArrays(gl.TRIANGLES, 0, 6)
      raf = requestAnimationFrame(draw)
    }
    raf = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
           style={{
             backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(232,224,212,0.05) 2px, rgba(232,224,212,0.05) 4px)',
           }} />

      <div className="relative z-10 w-full px-4 pointer-events-none">
        {/* Main title — monumental, 80% width */}
        <h1 className="font-[family-name:var(--font-bebas)] text-[clamp(80px,18vw,280px)]
                       leading-[0.85] tracking-[.04em] text-[#E8E0D4]
                       text-center fadeUp"
            style={{ animationDelay: '.3s', opacity: 0 }}>
          ШТИРЛИЦ
        </h1>

        {/* Subtitle — mono, small, precise */}
        <div className="flex items-center justify-center gap-3 mt-6 fadeUp"
             style={{ animationDelay: '.6s', opacity: 0 }}>
          <div className="h-[1px] w-8 bg-[#C4955A]/40" />
          <p className="font-[family-name:var(--font-mono)] text-[12px] md:text-[13px]
                        tracking-[.12em] uppercase text-[#C4955A]">
            Буратино за 5 минут. Автоматически.
          </p>
          <div className="h-[1px] w-8 bg-[#C4955A]/40" />
        </div>

        {/* Tags */}
        <p className="font-[family-name:var(--font-mono)] text-[10px] text-[#E8E0D4]/20
                      tracking-[.15em] text-center mt-5 fadeUp"
           style={{ animationDelay: '.8s', opacity: 0 }}>
          СУДЫ / ФССП / ЕГРЮЛ / ВКОНТАКТЕ / TELEGRAM / САНКЦИИ
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center mt-12 pointer-events-auto fadeUp"
             style={{ animationDelay: '1s', opacity: 0 }}>
          <a href="https://shtirletzsled.ru/login"
             className="font-[family-name:var(--font-mono)] text-[11px] font-medium
                        tracking-[.2em] uppercase
                        border border-[#C4955A] text-[#C4955A] px-10 py-3.5
                        no-underline transition-all duration-300
                        hover:bg-[#C4955A] hover:text-[#0A0A0A]">
            ПОПРОБОВАТЬ БЕСПЛАТНО
          </a>
          <p className="font-[family-name:var(--font-mono)] text-[9px] text-[#E8E0D4]/15
                        tracking-[.1em] mt-4">
            2 ПРОВЕРКИ / НЕДЕЛЮ &middot; БЕЗ КАРТЫ
          </p>
        </div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#E8E0D4]/[.06]" />
    </section>
  )
}
