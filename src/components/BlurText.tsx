import { useRef, memo } from 'react'
import { motion, useInView } from 'motion/react'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
}

const BlurText = memo(function BlurText({ text, className, delay = 0 }: BlurTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const words = text.split(' ')

  return (
    <p
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', rowGap: '0.1em' }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          style={{ display: 'inline-block', marginRight: '0.28em' }}
          initial={{ filter: 'blur(10px)', opacity: 0, y: 50 }}
          animate={
            isInView
              ? {
                  filter: ['blur(10px)', 'blur(5px)', 'blur(0px)'],
                  opacity: [0, 0.5, 1],
                  y: [50, -5, 0],
                }
              : {}
          }
          transition={{
            duration: 0.7,
            times: [0, 0.5, 1],
            ease: 'easeOut',
            delay: delay + (i * 100) / 1000,
          }}
        >
          {word}
        </motion.span>
      ))}
    </p>
  )
})

export default BlurText
