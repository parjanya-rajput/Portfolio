import { Mail, Github, Linkedin, Code, Code2, Trees, Send } from 'lucide-react';

const ContactSection = () => {
    const contactLinks = [
        {
            icon: Mail,
            label: 'Email',
            value: 'par212005@gmail.com',
            href: 'mailto:par212005@gmail.com',
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'parjanya-rajput',
            href: 'https://github.com/parjanya-rajput',
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'parjanya-rajput',
            href: 'https://www.linkedin.com/in/parjanya-rajput-9907ba249/',
        },
        {
            icon: Code,
            label: 'LeetCode',
            value: 'Knight Rated',
            href: 'https://leetcode.com/u/parjanya_rajput/',
        },
        {
            icon: Code2,
            label: 'GeeksForGeeks',
            value: '2000+ Score',
            href: 'https://www.geeksforgeeks.org/profile/parjanya05',
        },
        {
            icon: Trees,
            label: 'Linktree',
            value: 'All Socials',
            href: 'https://linktr.ee/miniowitter',
        },
    ];

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Connect</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Let's build something amazing together</p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <p className="contact-text">
                            I'm currently looking for new opportunities and my inbox is always open.
                            Whether you have a question, want to collaborate, or just want to say hi,
                            I'll try my best to get back to you!
                        </p>

                        <div className="contact-links">
                            {contactLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.href}
                                    target={link.href.startsWith('mailto') ? undefined : '_blank'}
                                    rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                                    className="contact-link-item"
                                >
                                    <div className="contact-link-icon">
                                        <link.icon size={22} />
                                    </div>
                                    <div className="contact-link-info">
                                        <span className="contact-link-label">{link.label}</span>
                                        <span className="contact-link-value">{link.value}</span>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <a href="mailto:par212005@gmail.com" className="btn btn-primary btn-lg contact-cta">
                            <span>Say Hello</span>
                            <Send size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
