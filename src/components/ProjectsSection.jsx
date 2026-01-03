import { useState } from 'react';
import { Github, MessageSquare, BarChart3, Globe, Users, ScanFace, GraduationCap, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectsSection = () => {
    const [showMore, setShowMore] = useState(false);

    const featuredProjects = [
        {
            title: 'Kumbh Milan',
            subtitle: 'Vicinity Based Friends Discovery',
            description: 'Connects users attending "Kumbh Mela" festival, enabling interactions based on geographic proximity for both Android and iOS. Supports Hindi & English with L10n Flutter localizations.',
            features: ['Interactive User Discovery', 'Real-Time Matching System', 'Secure Authentication', 'Quick Contact Sharing'],
            tech: ['Flutter', 'Provider', 'Python Flask'],
            image: 'https://raw.githubusercontent.com/basictech01/kumbh-milan/main/assets/cover.png',
            github: 'https://github.com/parjanya-rajput/kumbh-milap',
            featured: true,
            icon: null,
        },
        {
            title: 'AI Powered Chat App',
            subtitle: null,
            description: 'Led a team of 9 students in developing a modular chat application with 15+ reusable UI components following Atomic Design Pattern and MVC architecture.',
            features: ['AI Message Suggestions', 'One-to-One & Group Chat', 'Firebase Integration'],
            tech: ['React Native', 'Expo', 'Firebase', 'Cloudinary'],
            image: null,
            github: 'https://github.com/parjanya-rajput/G12_Chat_Application',
            featured: false,
            icon: MessageSquare,
        },
        {
            title: 'Stock Orderbook & Trade Engine',
            subtitle: null,
            description: 'High-performance application with barcode scanning of ID cards for automated entry logging. Utilized by the Election Commission at DAIICT in 2023.',
            features: ['80% Reduction in Manual Recording', 'Barcode Scanning', 'Automated Entry Logging'],
            tech: ['C++', 'Google Tests'],
            image: null,
            github: 'https://github.com/parjanya-rajput/OrderBook',
            featured: false,
            icon: BarChart3,
        },
        {
            title: 'Uniun',
            subtitle: 'Decentralised Social Media',
            description: 'Decentralized Thought Graph Protocol based on IOTA Tangle architecture where each user has a self-sovereign tangle storing "Thoughts". Aiming to achieve gasfree consensus layer.',
            features: ['Native Tokenomics', 'Personalised LLM', 'P2P Block Sharing', 'Decentralized Ads'],
            tech: ['Flutter', 'Golang', 'Rust', 'IOTA/Blockchain'],
            image: null,
            github: 'https://github.com/pranavpandey1998official/uniun',
            featured: false,
            icon: Globe,
        },
    ];

    const moreProjects = [
        {
            title: 'G12 Chat Application',
            subtitle: null,
            description: 'Course project for Software Engineering (IT-314) under Prof. Saurabh Tiwari. A feature-rich chat application built with modern web technologies.',
            features: null,
            tech: ['JavaScript', 'Node.js'],
            image: null,
            github: 'https://github.com/parjanya-rajput/G12_Chat_Application',
            featured: false,
            icon: Users,
        },
        {
            title: 'Face Recognition System',
            subtitle: null,
            description: 'AI-powered face recognition project made for Ascension Contest organized by AI CLUB at DAIICT.',
            features: null,
            tech: ['Python', 'Jupyter', 'ML'],
            image: null,
            github: 'https://github.com/parjanya-rajput/-FR-202201115-Ai-Ascension-',
            featured: false,
            icon: ScanFace,
        },
        {
            title: 'Edusakha',
            subtitle: null,
            description: 'Educational platform built during Hackout \'23 hackathon, designed to enhance learning experiences.',
            features: null,
            tech: ['Dart', 'Flutter'],
            image: null,
            github: 'https://github.com/parjanya-rajput/Hackout-23-Edusakha',
            featured: false,
            icon: GraduationCap,
            badge: 'Hackathon',
        },
    ];

    const renderProjectCard = (project, index, isFeatured = false) => (
        <article
            className={`project-card ${project.featured ? 'featured' : ''}`}
            key={index}
        >
            <div className="project-image">
                {project.image ? (
                    <img src={project.image} alt={project.title} loading="lazy" />
                ) : (
                    <div className="project-placeholder">
                        {project.icon && <project.icon size={64} />}
                    </div>
                )}
                <div className="project-overlay">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                    >
                        <Github size={24} />
                    </a>
                </div>
            </div>
            <div className="project-content">
                <div className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                    {project.featured && <span className="project-badge">Featured</span>}
                    {project.badge && <span className="project-badge hackathon">{project.badge}</span>}
                </div>
                {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                <p className="project-description">{project.description}</p>
                {project.features && (
                    <ul className="project-features">
                        {project.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>
                )}
                <div className="project-tech">
                    {project.tech.map((t, i) => (
                        <span className="tech-tag" key={i}>{t}</span>
                    ))}
                </div>
            </div>
        </article>
    );

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">A selection of my recent work and side projects</p>
                </div>

                <div className="projects-grid">
                    {featuredProjects.map((project, index) => renderProjectCard(project, index, true))}
                </div>

                {/* View More Projects Section */}
                <div className="projects-more-section">
                    <button
                        className="btn btn-ghost btn-lg view-more-btn"
                        onClick={() => setShowMore(!showMore)}
                    >
                        <span>{showMore ? 'Show Less' : 'View More Projects'}</span>
                        {showMore ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>

                    {showMore && (
                        <div className="projects-grid more-projects">
                            {moreProjects.map((project, index) => renderProjectCard(project, index))}
                        </div>
                    )}
                </div>

                <div className="projects-cta">
                    <a
                        href="https://github.com/parjanya-rajput?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-lg"
                    >
                        <span>View All 52+ Projects on GitHub</span>
                        <ExternalLink size={18} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
