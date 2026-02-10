import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';
import { Code } from 'lucide-react';

interface CareerItem {
  year: string;
  title: string;
  description: string;
}

const frontendData: CareerItem[] = [
  { year: '2022', title: 'Eyes,JAPAN アルバイト', description: 'ホームページのフロントエンド開発（8ヶ月のチーム開発）' },
  { year: '2023', title: '英会話塾の公式サイト制作', description: 'Studio を使って英会話塾の公式サイトを制作。' },
  { year: '2024', title: 'Quick Info Glossary', description: '技育博2024で企業賞受賞' },
  { year: '2025', title: 'QuickProfMail', description: 'Gemini API を活用した、AIによる研究室向けメール自動生成・テンプレート管理ツール。' },
  { year: '2026', title: '研究室のホームページ(制作中)', description: '研究室の魅力を伝えるための公式サイトを制作中。' },
];

const useInView = (options: IntersectionObserverInit) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return [ref, inView] as const;
};

const TimelineItem: React.FC<{ item: CareerItem; index: number; isLeft: boolean }> = ({ item, isLeft }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-4 flex justify-between items-center w-full ${isLeft ? 'md:flex-row-reverse' : ''
        }`}
    >
      <div className="hidden md:block w-5/12"></div>
      <div className="z-20 flex items-center justify-center bg-white shadow-xl w-6 h-6 rounded-full border-4 border-green-500">
        <Code className="w-3 h-3 text-green-500" />
      </div>
      <div className="w-full md:w-5/12 bg-white rounded-lg shadow-lg p-4">
        <span className="text-green-600 font-bold text-xs">{item.year}</span>
        <h3 className="text-lg font-bold mb-1">{item.title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
};

const CareerTimelineComponent: React.FC = () => {
  return (
    <section id="timeline" className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          Timeline
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2"></div>

            {frontendData.map((item, index) => (
              <TimelineItem
                key={index}
                item={item}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimelineComponent;
