import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CareerTimeline from './components/CareerTimeline.tsx';
import Production from './components/production';
import Skills from './components/Skills';
import Contact from './components/Contact';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  const heroRef = useRef(null);
  const timelineRef = useRef(null);
  const productionRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null); // contactRef を追加

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    // 各セクションのオフセットを取得
    const heroHeight = heroRef.current.offsetHeight;
    const timelineHeight = timelineRef.current.offsetHeight;
    const productionHeight = productionRef.current.offsetHeight;
    const skillsHeight = skillsRef.current.offsetHeight;

    // 各セクションの開始位置を計算
    const timelineStart = heroHeight;
    const productionStart = timelineStart + timelineHeight;
    const skillsStart = productionStart + productionHeight;

    if (scrollPosition < timelineStart) {
      setActiveSection('home');
    } else if (scrollPosition < productionStart) {
      setActiveSection('timeline');
    } else if (scrollPosition < skillsStart) {
      setActiveSection('production');
    } else if (scrollPosition < skillsStart + skillsHeight) {
      setActiveSection('skills');
    } else {
      setActiveSection('contact');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeSection === 'home') heroRef.current.scrollIntoView({ behavior: 'smooth' });
    if (activeSection === 'timeline') timelineRef.current.scrollIntoView({ behavior: 'smooth' });
    if (activeSection === 'production') productionRef.current.scrollIntoView({ behavior: 'smooth' });
    if (activeSection === 'skills') skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    if (activeSection === 'contact') contactRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [activeSection]);

  return (
    <div className="bg-background text-foreground">
      <Header activeSection={activeSection} />
      <main>
        <section id="home" ref={heroRef}><Hero /></section>
        <section id="timeline" ref={timelineRef}><CareerTimeline /></section>
        <section id="production" ref={productionRef}><Production /></section>
        <section id="skills" ref={skillsRef}><Skills /></section>
        <section id="contact" ref={contactRef}><Contact /></section>
      </main>
    </div>
  );
}
