import { useState, useEffect } from 'react';
import { Sun, Moon, Download } from 'lucide-react';

const Header = ({ theme, toggleTheme }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('intro');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = ['intro', 'experience', 'projects', 'education', 'achievements', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { id: 'intro', label: 'Home' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'contact', label: 'Contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <header className={`floating-header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-content">
                    <a href="#intro" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('intro'); }}>
                        <span className="logo-text">PR</span>
                        <span className="logo-dot"></span>
                    </a>

                    <nav className="nav-menu">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={`#${link.id}`}
                                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                                onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <button
                            className="theme-toggle"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            <Sun className="theme-icon sun" size={20} />
                            <Moon className="theme-icon moon" size={20} />
                        </button>

                        <a
                            href="https://drive.google.com/file/d/1NVLEXHxXEYWQNVHsuvKaQVVt5COCXrDG/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-sm"
                        >
                            <Download size={16} />
                            <span>Resume</span>
                        </a>

                        <button
                            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <nav className="mobile-nav">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            className="mobile-nav-link"
                            onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Header;
