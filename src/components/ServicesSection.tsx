import FadeIn from './FadeIn'
import siteConfig from '../data/site-config.json'

const { servicesHeading, services } = siteConfig

export default function ServicesSection() {
  return (
    <section className="rounded-t-[40px] bg-[var(--color-surface)] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32">
      <h2
        className="mb-16 text-center font-black uppercase leading-none tracking-tight text-[var(--color-bg)] sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {servicesHeading}
      </h2>

      <div className="mx-auto flex max-w-5xl flex-col divide-y divide-[rgba(12,12,12,0.15)]">
        {services.map((service, i) => (
          <FadeIn
            key={service.num}
            delay={i * 0.1}
            className="flex items-start gap-6 py-8 sm:gap-8 sm:py-10 md:py-12"
          >
            <span
              className="font-black leading-none text-[var(--color-bg)]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.num}
            </span>
            <div className="flex flex-col gap-2 pt-4 sm:pt-5 md:pt-8">
              <h3
                className="font-medium uppercase leading-none text-[var(--color-bg)]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed text-[var(--color-bg)] opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {service.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
