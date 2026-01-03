import { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState('intro');

    const sections = [
        { id: 'intro', label: 'Intro' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);

            // Update active section
            const scrollPosition = window.scrollY + 200;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="progress-container">
            <div className="progress-bar" style={{ width: `${scrollProgress}%` }} />
            <div className="progress-dots">
                {sections.map((section) => (
                    <button
                        key={section.id}
                        className={`progress-dot ${activeSection === section.id ? 'active' : ''}`}
                        onClick={() => scrollToSection(section.id)}
                        title={section.label}
                        aria-label={section.label}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProgressBar;
