import FadeIn from './FadeIn'
import Magnet from './Magnet'
import ContactButton from './ContactButton'
import siteConfig from '../data/site-config.json'

const { hero } = siteConfig

export default function HeroSection() {
  return (
    <section className="relative flex h-screen flex-col overflow-x-clip">
      <nav className="relative z-20 flex justify-between px-6 pt-6 md:px-10 md:pt-8">
        {hero.navLinks.map((link) => (
          <FadeIn key={link} delay={0} y={-20} duration={0.7}>
            <a
              href={`#${link.toLowerCase()}`}
              className="block text-sm font-medium uppercase tracking-wider text-[var(--color-text)] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link}
            </a>
          </FadeIn>
        ))}
      </nav>

      <div className="w-full overflow-hidden">
        <FadeIn delay={0.15} y={40} className="w-full">
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]">
            {hero.heading}
          </h1>
        </FadeIn>
      </div>

      <div className="mt-auto flex items-end justify-between gap-4 px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[var(--color-text)] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            {hero.subheading}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="shrink-0">
          <ContactButton />
        </FadeIn>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 w-[280px] -translate-x-1/2 -translate-y-1/2 sm:top-auto sm:bottom-0 sm:w-[360px] sm:translate-y-0 md:w-[440px] lg:w-[520px]">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img
              src={hero.portrait}
              alt="Carter"
              draggable={false}
              className="h-auto w-full select-none"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  )
}
