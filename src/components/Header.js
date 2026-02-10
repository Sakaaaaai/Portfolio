import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navItems = ['home', 'timeline', 'production', 'skills', 'contact']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between md:justify-center">
          <button
            className="md:hidden text-muted-foreground hover:text-primary focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <ul
            className={`${isMenuOpen ? 'flex' : 'hidden'
              } md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-background md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-4 lg:space-x-8`}
          >
            {navItems.map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`block text-base lg:text-lg font-medium transition-colors hover:text-primary ${activeSection === section ? 'text-primary' : 'text-muted-foreground'
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header