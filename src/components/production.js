import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Code, Monitor, X, Calendar, Users } from 'lucide-react';

const experienceData = [
  {
    id: 1,
    year: '2023',
    title: '英会話塾のサイト',
    description: '英会話塾のサイトの制作と運用',
    skills: ['Studio', 'UI/UX Design'],
    icon: <Monitor className="w-6 h-6" />,
    details: '本プロジェクトでは、バイト先の英会話塾の公式WebサイトをStudioを使用して制作しました。要件定義からデザイン案まで一人で考案し、塾との打ち合わせを通じて、英語と日本語に対応したレスポンシブデザインのWebサイトを完成させました。',
    achievements: [
      '複数のブラウザ対応のレスポンシブデザインを実装',
      'ユーザーにとって使いやすい二言語対応のデザインの実装',
    ],
    teamSize: 1,
    duration: '3ヶ月',
    link: 'https://green127358.studio.site/',
  },
  {
    id: 2,
    year: '2024',
    title: '見る用語集：情報（開発中）',
    description: '高校の情報の用語を視覚的に理解できるサイト',
    skills: ['React', 'Node.js', 'Firebase'],
    icon: <Code className="w-6 h-6" />,
    details: '教育現場での情報授業に格差があることを知り、高校生が自主的に情報学習を行えるサイトを制作しました。このサイトでは、学習意欲の高い高校生が主体的に情報の基礎知識を身に付けられるよう、分かりやすいコンテンツと使いやすいデザインを重視しています。',
    achievements: [
      'ログイン機能: Firebaseを使用し、ユーザーの学習進捗を保存できるようにしました。',
      '視覚的な説明: 図解やイラストを使用し、複雑な情報を視覚的にわかりやすく解説しました。',
      '直感的なデザイン: シンプルでわかりやすいインターフェースを採用し、情報に素早くアクセスできるようにしました。',
      'クイズ機能: 学習内容を確認できるクイズを通じて知識の定着をサポートしました。'
    ],
    teamSize: 1,
    duration: '二週間',
    link: 'https://visualwordbook-20b08.web.app/', 
  },
  {
    id: 3,
    year: '2023',
    title: 'Artrium',
    description: 'ハンドメイドのこだわりを紹介するWebサイト',
    skills: ['Studio', 'UI/UX Design'],
    icon: <Monitor className="w-6 h-6" />,
    details: '本プロジェクトは、Studioを利用して、ハンドメイドのこだわりを伝えるためのWebサイトを制作しました。約20名のハンドメイド作家との密なコミュニケーションを通じて、各作家の独自性や魅力を引き出すサイトデザインを行いました。',
    achievements: [
      'セッション数が427(一か月間）',
      'PV数が555(一か月間）',
      '20名以上のハンドメイド作家さんのデザイン制作'
    ],
    teamSize: 2,
    duration: '4ヶ月',
    link: 'https://artrium-handmade.com/', 
  },
  {
    id: 4,
    year: '2024',
    title: 'ポートフォリオサイト',
    description: '自分のこれまでの経験や制作物を理解してもらうためのサイト',
    skills: ['React', 'Node.js', 'Firebase', 'TypeScript'],
    icon: <Code className="w-6 h-6" />,
    details: 'このポートフォリオサイトは、「Life is what you make it」というテーマのもと、自分のこれまでの経験や制作物を理解してもらうために作成しました。自分の好きな色である緑をテーマカラーに採用し、温かみと親しみやすさを表現しています。サイトには制作物や活動のタイムラインを掲載し、これまでの成長や成果を訪問者に伝えられるよう工夫しています。',
    achievements: [
      '動きのあるデザイン：遊び心のあるアニメーションで、訪問者が楽しめるインタラクティブな体験を提供。',
      '広がりを感じさせるヘッターデザイン：透明度とぼかし効果で画面に広がりを与え、自然な一体感を実現。',
      '緑を基調としたテーマカラー：落ち着きと安心感のある配色で、快適な閲覧体験をサポート。'
    ],
    teamSize: 1,
    duration: '二週間',
    link: 'https://portfolio-9a436.web.app/', // リンクを追加
  }
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
