import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Code, Monitor, BookOpen, Database } from 'lucide-react';

const experienceData = [
  {
    year: '2022',
    title: 'eyes, Japan インターンシップ',
    description: 'ホームページのフロントエンド開発（チーム開発）',
    skills: ['JavaScript', 'HTML', 'CSS'],
    icon: <Monitor className="w-6 h-6" />
  },
  {
    year: '2022',
    title: '個人開発プロジェクト',
    description: 'Discord と GAS を使った仕事管理システム開発',
    skills: ['JavaScript'],
    icon: <Code className="w-6 h-6" />
  },
  {
    year: '2023',
    title: 'Studio を使ったウェブサイト制作',
    description: 'アルバイト先のホームページとハンドメイドサイト Artrium の制作',
    skills: ['Studio'],
    icon: <Monitor className="w-6 h-6" />
  },
  {
    year: '2024',
    title: '研究プロジェクト',
    description: '深層学習、LiDAR、SLAM を使用したロボット開発',
    skills: ['深層学習', 'LiDAR', 'SLAM'],
    icon: <Database className="w-6 h-6" />
  },
  {
    year: '2024',
    title: 'Skillup-next プロジェクト',
    description: '共通テストの問題作成',
    skills: ['React', 'Node.js', 'Firebase'],
    icon: <BookOpen className="w-6 h-6" />
  }
];

const useInView = (options) => {
  const [inView, setInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return [ref, inView];
};

const ExperienceCard = ({ item, variants }) => (
  <motion.div
    variants={variants}
    className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
  >
    <div className="flex items-center mb-4">
      <div className="bg-blue-500 rounded-full p-2 mr-4">
        {item.icon}
      </div>
      <div>
        <h3 className="text-xl font-semibold">{item.title}</h3>
        <p className="text-gray-600 ">{item.year}</p>
      </div>
    </div>
    <p className="text-gray-700 mb-4">{item.description}</p>
    <div className="flex flex-wrap gap-2">
      {item.skills.map((skill, index) => (
        <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm">
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

function Frontend() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section id="frontend" className="min-h-screen flex items-center justify-center bg-green-100 py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-gray-800"
        >
          フロントエンド開発経験
        </motion.h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experienceData.map((item, index) => (
            <ExperienceCard key={index} item={item} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Frontend;