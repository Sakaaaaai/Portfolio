function Header({ activeSection }) {
    return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex justify-center space-x-8">
            {['home', 'teaching', 'frontend', 'research', 'skills', 'education', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`text-lg font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
  }
  
  export default Header
  