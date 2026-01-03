import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Link, ArrowRight, ChevronDown } from 'lucide-react';

const IntroSection = () => {
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const roles = [
        'Mobile Applications',
        'React Native Apps',
        'Flutter Apps',
        'Scalable Systems',
        'Beautiful UIs',
    ];

    useEffect(() => {
        const currentRole = roles[currentIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (typedText.length < currentRole.length) {
                    setTypedText(currentRole.slice(0, typedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (typedText.length > 0) {
                    setTypedText(currentRole.slice(0, typedText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentIndex((prev) => (prev + 1) % roles.length);
                }
            }
        }, isDeleting ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [typedText, isDeleting, currentIndex]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="intro" className="section intro-section">
            <div className="container">
                <div className="intro-content">
                    <div className="intro-badge animate-fade-in">
                        <span className="status-dot"></span>
                        <span>Available for opportunities</span>
                    </div>

                    <h1 className="intro-title animate-fade-in-up">
                        <span className="greeting">Hey there 👋, I'm</span>
                        <span className="name">Parjanya Rajput</span>
                    </h1>

                    <div className="intro-roles animate-fade-in-up delay-1">
                        <span className="role-text">I build </span>
                        <span className="typing-container">
                            <span className="typing-text">{typedText}</span>
                            <span className="cursor">|</span>
                        </span>
                    </div>

                    <p className="intro-description animate-fade-in-up delay-2">
                        A technology enthusiast eager to learn and grow in <strong>frontend engineering</strong>,{' '}
                        <strong>system design</strong>, and <strong>distributed systems</strong>.
                        Highly accountable for my work with a passion for building impactful applications.
                    </p>

                    <div className="intro-actions animate-fade-in-up delay-4">
                        <button onClick={() => scrollToSection('projects')} className="btn btn-primary btn-lg">
                            <span>View My Work</span>
                            <ArrowRight size={20} />
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="btn btn-ghost btn-lg">
                            <span>Get In Touch</span>
                        </button>
                    </div>

                    <div className="intro-social animate-fade-in-up delay-5">
                        <a href="https://github.com/parjanya-rajput" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                            <Github size={22} />
                        </a>
                        <a href="https://www.linkedin.com/in/parjanya-rajput-9907ba249/" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                            <Linkedin size={22} />
                        </a>
                        <a href="mailto:par212005@gmail.com" className="social-link" title="Email">
                            <Mail size={22} />
                        </a>
                        <a href="https://linktr.ee/miniowitter" target="_blank" rel="noopener noreferrer" className="social-link" title="Linktree">
                            <Link size={22} />
                        </a>
                    </div>
                </div>

                <div className="scroll-indicator animate-fade-in delay-5">
                    <span>Scroll to explore</span>
                    <div className="scroll-arrow">
                        <ChevronDown size={24} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
