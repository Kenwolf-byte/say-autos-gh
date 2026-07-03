import { motion } from 'motion/react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

const FadeIn = ({ children, delay = 0, className = '' }: FadeInProps) => (
  <motion.div
    className={className}
    initial={{ filter: 'blur(10px)', opacity: 0, y: 20 }}
    animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: 'easeOut', delay }}
  >
    {children}
  </motion.div>
)

export default FadeIn
