import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Code, Monitor, X, Calendar, Users } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    year: '2023',
    title: '英会話塾のサイト',
    description: '英会話塾のサイトの制作',
    skills: ['Studio', 'UI/UX Design'],
    icon: <Monitor className="w-6 h-6" />,
    details: '本プロジェクトでは、バイト先の英会話塾の公式WebサイトをStudioを使用して制作しました。要件定義からデザイン案まで一人で考案し、塾との打ち合わせを通じてレスポンシブデザインのWebサイトを完成させました。',
    achievements: [
      '複数のブラウザ対応のレスポンシブデザインを実装',
      '話を伺いながら要件定義',
      '英会話塾のテーマカラーを使った子供らしいデザイン'
    ],
    teamSize: 1,
    duration: '3ヶ月',
    link: 'https://green127358.studio.site/',
  },
  {
    id: 2,
    year: '2024',
    title: 'Quick Info Glossary',
    description: '高校の情報の用語を視覚的に理解できるサイト',
    skills: ['React', 'Firebase'],
    icon: <Code className="w-6 h-6" />,
    details: '教育現場での情報授業に格差があることを知り、高校生が自主的に共通テスト情報Ⅰの学習を行えるサイトを制作しました。このサイトでは、学習意欲の高い高校生が主体的に情報の基礎知識を身に付けられるよう、分かりやすいコンテンツと使いやすいデザインを重視しています。',
    achievements: [
      'ログイン機能: Firebaseを使用し、ユーザーの学習進捗を保存できるようにしました。',
      '視覚的な説明: それぞれの用語にデモを付けることで複雑な情報を視覚的にわかりやすく解説しました。',
      '直感的なデザイン: シンプルでわかりやすいインターフェースを採用し、情報に素早くアクセスできるようにしました。',
      'クイズ機能: 学習内容を確認できるクイズを通じて知識の定着をサポートしました。'
    ],
    teamSize: 1,
    duration: '4か月',
    link: 'https://visualwordbook-20b08.web.app/',
  },
  {
    id: 3,
    year: '2024',
    title: 'ポートフォリオサイト',
    description: '自分のこれまでの経験や制作物を理解してもらうためのサイト',
    skills: ['React', 'Firebase', 'TypeScript'],
    icon: <Code className="w-6 h-6" />,
    details: 'このポートフォリオサイトは、「Life is what you make it」というテーマのもと、自分のこれまでの経験や制作物を理解してもらうために作成しました。自分の好きな色である緑をテーマカラーに採用しています。サイトには制作物や活動のタイムラインを掲載し、これまでの成長や成果を訪問者に伝えられるよう工夫しています。',
    achievements: [
      '動きのあるデザイン：遊び心のあるアニメーションで、訪問者が楽しめるインタラクティブな体験を提供。',
      '広がりを感じさせるヘッターデザイン：透明度とぼかし効果で画面に広がりを与え、自然な一体感を実現。',
    ],
    teamSize: 1,
    duration: '2週間',
    link: 'https://portfolio-9a436.web.app/',
  },
  {
    id: 4,
    year: '2025',
    title: 'QuickProfMail',
    description: '教授とのメールを円滑にするAI自動生成・テンプレート管理ツール',
    skills: ['Next.js', 'Firebase', 'Gemini API', 'AI'],
    icon: <Code className="w-6 h-6" />,
    details: '研究室内での教授とのメールを円滑にしたいという思いと、AIを利用したサイトを作りたいと思いこのサイトを作成しました。このサイトはGeminiのAPIを利用することでメール自動生成機能を実装しています。',
    achievements: [
      'メール自動生成: Gemini API を活用し、内容に応じた丁寧なメール文面を即座に生成。',
      'テンプレート機能: よく送るメールのテンプレートを保存し、変数を設定することで再利用性を向上。',
      '研究室コミュニケーションの効率化: 定型的な報告や相談のメール作成時間を大幅に短縮。',
    ],
    teamSize: 1,
    duration: '3週間',
    link: 'https://quickprofmail.web.app/',
  },
  {
    id: 5,
    year: '2026',
    title: '研究室のホームページ(制作中)',
    description: '所属研究室の公式サイト（現在制作中）',
    skills: ['Next.js', 'Firebase', 'Tailwind CSS'],
    icon: <Monitor className="w-6 h-6" />,
    details: '研究室の活動内容や研究成果を対外的に発信するための公式サイトを制作しています。最新のフレームワークを用い、管理のしやすさとデザイン性を両立させています。',
    achievements: [
      'レスポンシブデザイン: PC・スマホ両面できれいに表示される構成。',
      '制作中: 順次コンテンツを拡充し、公開に向けて開発を継続中。',
    ],
    teamSize: 1,
    duration: '継続中',
    link: 'https://saitolab-ebb6d.web.app/',
  },
];

const useInView = (options) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return [ref, inView];
};

const ExperienceCard = ({ item, variants, onClick }) => (
  <motion.div
    variants={variants}
    className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 cursor-pointer"
    whileHover={{
      scale: 1.05,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
    }}
    onClick={() => onClick(item.id)}
  >
    <div className="flex items-center mb-4">
      <div className="rounded-full p-2 mr-4 bg-green-100">
        {item.icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-gray-600">{item.year}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-4">{item.description}</p>
    <div className="flex flex-wrap gap-2">
      {item.skills.slice(0, 3).map((skill, index) => (
        <span key={index} className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm">
          {skill}
        </span>
      ))}
      {item.skills.length > 3 && (
        <span className="bg-green-100 text-green-800 rounded-full px-3 py-1 text-sm">
          +{item.skills.length - 3}
        </span>
      )}
    </div>
  </motion.div>
);

const CardDetails = ({ item, onClose }) => (
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
      <div className="flex items-center mb-6">
        <div className="rounded-full p-4 mr-4 bg-green-100">
          {item.icon}
        </div>
        <div>
          <h2 className="text-3xl font-bold">{item.title}</h2>
          <p className="text-xl text-gray-600">{item.year}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">プロジェクト概要</h3>
          <p className="text-gray-700 mb-4">{item.details}</p>
          <div className="flex items-center mb-2">
            <Users className="w-5 h-5 mr-2 text-green-600" />
            <span>チーム規模: {item.teamSize}人</span>
          </div>
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-green-600" />
            <span>期間: {item.duration}</span>
          </div>
          <div className="mt-4">
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
              プロジェクトリンク
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">主な成果/サイトのこだわり</h3>
          <ul className="list-disc list-inside space-y-2">
            {item.achievements.map((achievement, index) => (
              <li key={index} className="text-gray-700">{achievement}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-4">使用技術</h3>
        <div className="flex flex-wrap gap-2">
          {item.skills.map((skill, index) => (
            <span key={index} className="bg-green-100 text-green-800 rounded-full px-4 py-2 text-sm">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

function Production() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: {
      y: 20,
      opacity: 0,
      rotate: 10
    },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 120,
        duration: 0.8
      }
    }
  };

  const handleCardClick = (id) => {
    setSelectedCard(experienceData.find(item => item.id === id));
  };

  const handleCloseDetails = () => {
    setSelectedCard(null);
  };

  return (
    <section id="production" className="min-h-screen flex items-center justify-center bg-green-50 py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800"
        >
          Production
        </motion.h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experienceData.map((item) => (
            <ExperienceCard key={item.id} item={item} variants={itemVariants} onClick={handleCardClick} />
          ))}
        </motion.div>
        <AnimatePresence>
          {selectedCard && (
            <CardDetails item={selectedCard} onClose={handleCloseDetails} />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Production;
