import { useState, useEffect, useRef } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CareerTimeline from './components/CareerTimeline.tsx'
import Frontend from './components/Frontend'
import Research from './components/Research'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home')

  const heroRef = useRef(null)
  const teachingRef = useRef(null)
  const frontendRef = useRef(null)
  const researchRef = useRef(null)
  const skillsRef = useRef(null)
  const educationRef = useRef(null)

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const windowHeight = window.innerHeight

    if (scrollPosition < windowHeight) {
      setActiveSection('home')
    } else if (scrollPosition < windowHeight * 2) {
      setActiveSection('teaching')
    } else if (scrollPosition < windowHeight * 3) {
      setActiveSection('frontend')
    } else if (scrollPosition < windowHeight * 4) {
      setActiveSection('research')
    } else if (scrollPosition < windowHeight * 5) {
      setActiveSection('skills')
    } else {
      setActiveSection('education')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // `activeSection`の変更に応じて自動スクロール
    if (activeSection === 'home') heroRef.current.scrollIntoView({ behavior: 'smooth' })
    if (activeSection === 'teaching') teachingRef.current.scrollIntoView({ behavior: 'smooth' })
    if (activeSection === 'frontend') frontendRef.current.scrollIntoView({ behavior: 'smooth' })
    if (activeSection === 'research') researchRef.current.scrollIntoView({ behavior: 'smooth' })
    if (activeSection === 'skills') skillsRef.current.scrollIntoView({ behavior: 'smooth' })
    if (activeSection === 'education') educationRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [activeSection])

  return (
    <div className="bg-background text-foreground">
      <Header activeSection={activeSection} />
      <main>
        <section ref={heroRef}><Hero /></section>
        <section ref={teachingRef}><CareerTimeline /></section>
        <section ref={frontendRef}><Frontend /></section>
        <section ref={researchRef}><Research /></section>
        <section ref={skillsRef}><Skills /></section>
        <section ref={educationRef}><Education /></section>
        <section><Contact /></section>
      </main>
    </div>
  )
}
