import React, { useState } from 'react'
import { Code, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const programmingSkills = [
  {
    id: 1,
    name: "Three.js",
    level: 7,
    icon: <Code className="w-6 h-6" />,
    description: "3Dグラフィックスを用いた没入感のあるWeb体験の構築。",
    details: "Three.jsを使用して、Webブラウザ上で動作する3D空間の構築やアニメーションの実装を行っています。ポートフォリオサイトでの演出や、インタラクティブなデータビジュアライゼーションに活用しています。",
    projects: ["ポートフォリオの3D演出", "3Dモデルビューアー"],
    learningResources: ["Three.js Journey", "公式ドキュメント", "Three.js Fundamentals"]
  },
  {
    id: 2,
    name: "JavaScript",
    level: 8,
    icon: <Code className="w-6 h-6" />,
    description: "ベンチャー企業でのアルバイトで温泉旅館のWebサイトや割り当てプログラムを作成。",
    details: "大学1年生の頃、1年間にわたってベンチャー企業でアルバイトをしていました。JavaScriptを使い、温泉旅館のホームページを作成したり、社内向けの発表者割り当てプログラムを開発しました。これにより、フロントエンドと簡単なバックエンドのスキルを習得しました。",
    projects: ["温泉旅館のWebサイト作成", "社内用割り当てプログラム"],
    learningResources: ["JavaScriptチュートリアル", "初心者向け動画教材"]
  },
  {
    id: 3,
    name: "React",
    level: 6,
    icon: <Code className="w-6 h-6" />,
    description: "用語集作成やポートフォリオ作成のフロントエンドで使用。",
    details: "Reactを使って用語集作成のフロントエンドを開発しました。コンポーネント設計やHooksの使用、シンプルな状態管理を経験し、Reactの基本を習得しました。",
    projects: ["用語集作成プロジェクト"],
    learningResources: ["React公式ドキュメント", "Reactに関するYouTubeチュートリアル", "オンラインReact講座"]
  },
  {
    id: 4,
    name: "TypeScript",
    level: 8,
    icon: <Code className="w-6 h-6" />,
    description: "Reactで用語集を作成する際に使用。",
    details: "ReactプロジェクトでTypeScriptを使用し、静的型付けの重要性と便利さを学びました。インターフェースや型定義を使ったコードの信頼性向上に取り組みました。",
    projects: ["用語集作成プロジェクト"],
    learningResources: ["TypeScript公式ドキュメント", "TypeScript入門書", "オンライン動画教材"]
  },
];


const GaugeProgress = ({ value, maxValue = 10 }) => {
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
          whileInView={{ pathLength: value / maxValue }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        />
      </svg>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-lg font-semibold">
        {value}/{maxValue}
      </div>
    </div>
  )
}

const SkillCard = ({ skill, onClick, variants }) => {
  return (
    <motion.div
      variants={variants}
      className="bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(skill.id)}
    >
      <div className="flex items-center space-x-2 bg-primary/10 dark:bg-primary/20 p-4">
        <div className="rounded-full p-2 bg-green-100">
          {skill.icon}
        </div>
        <h3 className="text-lg font-semibold text-primary">{skill.name}</h3>
      </div>
      <div className="p-6 flex flex-col items-center justify-center">
        <GaugeProgress value={skill.level} />
        <span className="mt-2 text-sm font-medium text-gray-600">習熟度</span>
        <p className="mt-4 text-gray-600 text-center">{skill.description}</p>
      </div>
    </motion.div>
  )
}

const SkillDetails = ({ skill, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
  >
    <motion.div
      initial={{ scale: 0.9, y: 50 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.9, y: 50 }}
      className="bg-white rounded-lg p-8 max-w-4xl w-full relative"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <X className="w-6 h-6" />
      </button>
      <div className="mb-6">
        <h2 className="text-3xl font-bold">{skill.name}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">詳細</h3>
          <p className="text-gray-700 mb-4">{skill.details}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">プロジェクト例</h3>
          <ul className="list-disc list-inside space-y-2">
            {skill.projects.map((project, index) => (
              <li key={index} className="text-gray-700">{project}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">学習リソース</h3>
        <ul className="list-disc list-inside space-y-2">
          {skill.learningResources.map((resource, index) => (
            <li key={index} className="text-gray-700">{resource}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  </motion.div>
)

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState(null)

  const handleSkillClick = (id) => {
    setSelectedSkill(programmingSkills.find(skill => skill.id === id))
  }

  const handleCloseDetails = () => {
    setSelectedSkill(null)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-green-200">
      <div className="container mx-auto px-6 py-12">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Programming Skills
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programmingSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
              onClick={handleSkillClick}
              variants={itemVariants}
            />
          ))}
        </motion.div>
        <AnimatePresence>
          {selectedSkill && (
            <SkillDetails skill={selectedSkill} onClose={handleCloseDetails} />
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
