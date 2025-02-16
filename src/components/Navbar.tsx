
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-secondary">Abdul Raheem</a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="ml-4"
              onClick={() => window.open("/public/01Abdulpro.pdf", "_blank")}
            >
              Resume
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="ml-2"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background dark:bg-dark-bg py-4 animate-slide-down">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm hover:bg-primary/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 py-2 space-y-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => window.open("/resume.pdf", "_blank")}
              >
                Resume
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="w-full"
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
