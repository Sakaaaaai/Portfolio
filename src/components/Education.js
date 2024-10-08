import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

function Education() {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section id="education" className="min-h-screen flex items-center justify-center bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">教育</h2>
        <motion.div ref={ref} initial="hidden" animate={controls} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delayChildren: 0.3, staggerChildren: 0.2 } } }} className="space-y-8">
          {/* Education details */}
        </motion.div>
      </div>
    </section>
  )
}

export default Education
