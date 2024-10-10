"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Code } from 'lucide-react'
import { motion, useAnimation } from 'framer-motion'

const programmingSkills = [
  { name: "Python", level: 7 },
  { name: "Java", level: 4 },
  { name: "C言語", level: 6 },
  { name: "HTML", level: 7 },
  { name: "CSS", level: 7 },
  { name: "JavaScript", level: 8 },
  { name: "React", level: 6 },
  { name: "TypeScript", level: 4 },
]

const useInView = (options) => {
  const [inView, setInView] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
    }, options)

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [options])

  return [ref, inView]
}

const GaugeProgress = ({ value, maxValue = 10, shouldAnimate }) => {
  const [progress, setProgress] = useState(0)
  const controls = useAnimation()

  useEffect(() => {
    if (shouldAnimate) {
      controls.start({
        pathLength: value / maxValue,
        transition: { duration: 1, ease: "easeInOut" }
      })

      const timer = setTimeout(() => setProgress(value), 1000)
      return () => clearTimeout(timer)
    }
  }, [shouldAnimate, value, maxValue, controls])

  return (
    <div className="relative w-32 h-20">
      <svg className="w-full h-full" viewBox="0 0 100 50">
        <path d="M5 50 A45 45 0 0 1 95 50" fill="none" stroke="#e5e7eb" strokeWidth="10" />
        <motion.path
          d="M5 50 A45 45 0 0 1 95 50"
          fill="none"
          stroke="#1f8e3d"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={controls}
        />
      </svg>
      <motion.div 
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {progress}/{maxValue}
      </motion.div>
    </div>
  )
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-green-200"> 
      <div className="container mx-auto px-6 py-12">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Programming Skills
        </motion.h2>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programmingSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const SkillCard = ({ skill }) => {
  const [ref, inView] = useInView({ threshold: 0.3 }) // ゲージが見える位置に来たらアニメーションを開始
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={itemVariants}
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <div className="flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 p-4">
        <Code className="w-6 h-6 text-primary" />
        <h3 className="text-lg font-semibold text-primary">{skill.name}</h3>
      </div>
      <div className="p-6 flex flex-col items-center justify-center">
        <GaugeProgress value={skill.level} shouldAnimate={inView} />
        <span className="mt-2 text-sm font-medium text-gray-600">習熟度</span>
      </div>
    </motion.div>
  )
}
