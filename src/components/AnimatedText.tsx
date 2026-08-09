import { useRef } from 'react'
import type { CSSProperties } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { MotionValue } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: CSSProperties
}

function Char({
  char,
  progress,
  range,
}: {
  char: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.2, 1])

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
    >
      <span aria-hidden="true" style={{ opacity: 0.2 }}>
        {char}
      </span>
      <motion.span
        style={{
          opacity,
          position: 'absolute',
          left: 0,
          top: 0,
        }}
      >
        {char}
      </motion.span>
    </span>
  )
}

function Word({
  word,
  progress,
  range,
}: {
  word: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const amount = range[1] - range[0]
  const chars = word.split('')

  return (
    <span
      style={{
        display: 'inline-block',
        whiteSpace: 'nowrap',
      }}
    >
      {chars.map((char, i) => (
        <Char
          key={i}
          char={char}
          progress={progress}
          range={[
            range[0] + (i * amount) / chars.length,
            range[0] + ((i + 1) * amount) / chars.length,
          ]}
        />
      ))}
    </span>
  )
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const words = text.split(' ')

  return (
    <p ref={paragraphRef} className={className} style={style}>
      {words.map((word, i) => (
        <span key={i} style={{ marginRight: '0.25em' }}>
          <Word
            word={word}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
          />
        </span>
      ))}
    </p>
  )
}
