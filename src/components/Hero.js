import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-4">
          こんにちは、私は[あなたの名前]です
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="text-xl mb-8">
          教育者 / フロントエンド開発者 / 研究者
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>
          <Button asChild>
            <a href="#contact">お問い合わせ</a>
          </Button>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }} className="absolute bottom-10">
        <ChevronDown className="animate-bounce" size={32} />
      </motion.div>
    </section>
  )
}

export default Hero
