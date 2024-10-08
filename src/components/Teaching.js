"use client"

import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, Variants } from 'framer-motion'
import { Book, Code, Microscope } from 'lucide-react'

interface CareerItem {
  year: string
  title: string
  description: string
}

const teachingData: CareerItem[] = [
  { year: '2023', title: '教職課程開始', description: '大学2年次に教職課程を開始し、教育の基礎理論を学ぶ' },
  { year: '2024', title: '教育実習準備', description: '模擬授業の実施と教材開発のスキル向上' },
  { year: '2025', title: '教育実習', description: '中学校での4週間の教育実習を完了' },
  { year: '2026', title: '教員免許取得', description: '中学校教諭一種免許状（情報）を取得' },
]

const frontendData: CareerItem[] = [
  { year: '2022', title: 'eyes,Japan アルバイト', description: 'ホームページのフロントエンド開発（チーム開発）、Discord と GAS を使った仕事管理システム開発（個人開発）' },
  { year: '2023', title: 'Studio でホームページ制作', description: 'アルバイト先のホームページを2ヶ月かけて制作' },
  { year: '2023', title: 'Artrium サイト制作', description: 'Studio を使ってハンドメイドのサイト Artrium を4ヶ月かけて作成' },
  { year: '2024', title: '見る用語集：情報 開発', description: 'React, Node.js, Firebase を使用して開発' },
]

const researchData: CareerItem[] = [
  { year: '2022', title: '会津大学入学', description: '大学1年生として入学' },
  { year: '2024', title: '研究室配属', description: '深層学習や LiDAR、SLAM などを使った身の回りの手伝いをするロボット開発の研究を開始' },
  { year: '2024', title: 'TOEIC 605点取得', description: '英語力向上の成果' },
  { year: '2024', title: 'skillup-next プロジェクト', description: '共通テストの問題作成に携わる' },
]

const useInView = (options: IntersectionObserverInit) => {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        controls.start('visible')
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref, options, controls])

  return [ref, controls] as const
}

const CareerTimeline: React.FC<{ data: CareerItem[]; icon: React.ReactNode; title: string; bgColor: string }> = ({ data, icon, title, bgColor }) => {
  const [ref, controls] = useInView({ threshold: 0.1 })

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <div className={`flex-1 p-6 rounded-lg shadow-lg ${bgColor}`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-6 text-center text-primary"
      >
        {title}
      </motion.h2>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
        className="relative"
      >
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20"></div>
        {data.map((item, index) => (
          <motion.div key={index} variants={itemVariants} className="flex items-start space-x-4 mb-8">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                {React.cloneElement(icon as React.ReactElement, { className: "w-4 h-4 text-primary" })}
              </div>
            </div>
            <div className="flex-grow">
              <div className="text-sm font-semibold text-muted-foreground mb-1">{item.year}</div>
              <h3 className="text-lg font-semibold mb-2 text-primary">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default function CareerTimelineComponent() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center text-primary">キャリアタイムライン</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <CareerTimeline data={teachingData} icon={<Book />} title="教職経験" bgColor="bg-primary/5" />
          <CareerTimeline data={frontendData} icon={<Code />} title="フロントエンド経験" bgColor="bg-primary/10" />
          <CareerTimeline data={researchData} icon={<Microscope />} title="研究経験" bgColor="bg-primary/15" />
        </div>
      </div>
    </section>
  )
}
