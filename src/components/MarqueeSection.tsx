import { useEffect, useRef } from 'react'
import siteConfig from '../data/site-config.json'

const { marquee } = siteConfig

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rafId = 0

    const update = () => {
      rafId = requestAnimationFrame(() => {
        const sectionTop = sectionRef.current?.offsetTop ?? 0
        const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3
        if (row1Ref.current) {
          row1Ref.current.style.transform = `translateX(${offset - 200}px)`
        }
        if (row2Ref.current) {
          row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`
        }
      })
    }

    const onScroll = () => {
      cancelAnimationFrame(rafId)
      update()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const row1 = [...marquee.row1, ...marquee.row1, ...marquee.row1]
  const row2 = [...marquee.row2, ...marquee.row2, ...marquee.row2]

  return (
    <section
      ref={sectionRef}
      className="overflow-x-clip bg-[var(--color-bg)] pb-10 pt-24 sm:pt-32 md:pt-40"
    >
      <div className="flex flex-col gap-3">
        <div
          ref={row1Ref}
          className="flex w-max gap-3"
          style={{ willChange: 'transform' }}
        >
          {row1.map((src, i) => (
            <img
              key={`r1-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
        <div
          ref={row2Ref}
          className="flex w-max gap-3"
          style={{ willChange: 'transform' }}
        >
          {row2.map((src, i) => (
            <img
              key={`r2-${i}`}
              src={src}
              alt=""
              loading="lazy"
              className="h-[270px] w-[420px] shrink-0 rounded-2xl object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
