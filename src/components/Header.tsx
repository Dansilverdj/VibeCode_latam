import { useState } from 'react';
import { Menu, X, Code2, Sun, Moon } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/hooks/use-theme';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-lg bg-gradient-to-r from-electric to-cyber">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-electric to-cyber bg-clip-text text-transparent">
              Vibe Coding
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-electric transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('courses')}
              className="text-foreground hover:text-electric transition-colors duration-300"
            >
              Courses
            </button>
            <button
              onClick={() => scrollToSection('resources')}
              className="text-foreground hover:text-electric transition-colors duration-300"
            >
              Resources
            </button>
            <button
              onClick={() => scrollToSection('game')}
              className="text-foreground hover:text-electric transition-colors duration-300"
            >
              Play
            </button>
            
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-border">
              <Sun className="h-4 w-4 text-muted-foreground" />
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-electric"
              />
              <Moon className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-electric transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('courses')}
                className="text-left text-foreground hover:text-electric transition-colors duration-300"
              >
                Courses
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="text-left text-foreground hover:text-electric transition-colors duration-300"
              >
                Resources
              </button>
              <button
                onClick={() => scrollToSection('game')}
                className="text-left text-foreground hover:text-electric transition-colors duration-300"
              >
                Play
              </button>
              
              {/* Mobile Theme Toggle */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-foreground font-medium">Dark Mode</span>
                <div className="flex items-center space-x-2">
                  <Sun className="h-4 w-4 text-muted-foreground" />
                  <Switch
                    checked={theme === 'dark'}
                    onCheckedChange={toggleTheme}
                    className="data-[state=checked]:bg-electric"
                  />
                  <Moon className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;