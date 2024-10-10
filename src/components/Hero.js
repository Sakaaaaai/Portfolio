import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative bg-green-500 overflow-hidden">

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0"
      >
        <span className="text-white text-[10vw] font-extrabold whitespace-nowrap">
          Life is what
        </span>
        <span className="text-white text-[10vw] font-extrabold whitespace-nowrap mt-[-2vw]">
          you make it.
        </span>
      </motion.div>

      <div className="text-center z-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mb-8"
        >
          <img
            src="/image1.jpg"
            alt="Frog character"
            width={200}
            height={200}
            className="mx-auto"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-5xl font-bold mb-4 text-white"
        >
          Sakai
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="text-xl mb-8 text-white"
        >
          <strong>教育者 / フロントエンド開発者 / 研究者</strong>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="#contact">
            <button className="px-4 py-2 bg-white text-green-500 rounded hover:bg-green-100">
              お問い合わせ
            </button>
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-10"
      >
        <ChevronDown className="animate-bounce text-white" size={32} />
      </motion.div>
    </section>
  );
}
