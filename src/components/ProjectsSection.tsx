import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { CSSProperties } from 'react'
import LiveProjectButton from './LiveProjectButton'
import siteConfig from '../data/site-config.json'

const { projectsHeading, projects } = siteConfig

interface Project {
  num: string
  category: string
  name: string
  image1: string
  image2: string
  image3: string
}

function ProjectCard({ project, index, totalCards }: { project: Project; index: number; totalCards: number }) {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  })

  const targetScale = 1 - (totalCards - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={targetRef}
      className="sticky top-[calc(var(--card-top)+6rem)] flex h-[85vh] items-start justify-center md:top-[calc(var(--card-top)+8rem)]"
      style={{ ['--card-top' as string]: `${index * 28}px` } as CSSProperties}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[40px] border-2 border-[var(--color-text)] bg-[var(--color-bg)] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div className="flex flex-wrap items-start justify-between gap-4 sm:items-center">
          <span
            className="font-black leading-none text-[var(--color-text)]"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {project.num}
          </span>
          <div className="flex flex-col items-start gap-1">
            <span className="text-xs uppercase tracking-widest text-[var(--color-text)] opacity-70 sm:text-sm">
              {project.category}
            </span>
            <h3 className="text-xl font-medium uppercase text-[var(--color-text)] sm:text-2xl md:text-3xl lg:text-4xl">
              {project.name}
            </h3>
          </div>
          <LiveProjectButton />
        </div>

        <div className="mt-4 grid grid-cols-5 gap-3 sm:mt-6 sm:gap-4 md:mt-8">
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
            <img
              src={project.image1}
              alt={`${project.name} visual 1`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.image2}
              alt={`${project.name} visual 2`}
              loading="lazy"
              className="w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="relative col-span-3 min-h-[300px]">
            <img
              src={project.image3}
              alt={`${project.name} hero visual`}
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[40px] object-cover sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function ProjectsSection() {
  const totalCards = projects.length

  return (
    <section className="relative z-10 -mt-10 rounded-t-[40px] bg-[var(--color-bg)] px-5 pt-16 pb-10 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-20">
      <h2
        className="hero-heading text-center font-black uppercase leading-none tracking-tight"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {projectsHeading}
      </h2>

      <div className="mt-16 flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.num} project={project} index={index} totalCards={totalCards} />
        ))}
      </div>
    </section>
  )
}
