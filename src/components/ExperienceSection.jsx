import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
    const experiences = [
        {
            title: 'Application Developer Intern',
            company: 'Basic Tech Agency',
            date: 'Feb 2025 – May 2025 & Dec 2025 – Current',
            location: 'Remote, India',
            certificateLink: 'https://drive.google.com/file/d/1shZAGIcCdfuwxTX-56A-3jn8CNxKIbyA/view?usp=sharing',
            points: [
                'Developed and delivered multiple mobile and web applications under tight deadlines at a tech agency.',
                'Migrated a legacy React site to Next.js, added multilingual support, and handled full deployment to custom domains.',
                'Took ownership of end-to-end project execution, ensuring quality and timely delivery.',
            ],
            tags: ['React', 'Next.js', 'Mobile Development', 'Deployment'],
            hasLine: true,
        },
        {
            title: 'Frontend Developer Intern',
            company: 'GreenAI Services Pvt. Ltd',
            date: 'June 2024 – July 2024',
            location: 'Remote, Kolkata',
            certificateLink: 'https://drive.google.com/file/d/1-uTFjuBiOo3YUMtEY0rkbb0NLs5TEgBv/view',
            points: [
                'Created a Singleton API interface for seamless data exchange, resulting in <strong>30% reduction</strong> in data retrieval time.',
                'Engineered a secure navigation system across <strong>12 screens</strong>, enabling seamless UX while maintaining application state.',
                'Proficient in React Native with Redux for state management, utilizing JavaScript for robust development.',
            ],
            tags: ['React Native', 'Redux', 'JavaScript', 'Git'],
            hasLine: false,
        },
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Career</span>
                    <h2 className="section-title">Work Experience</h2>
                    <p className="section-subtitle">Building impactful solutions at innovative companies</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-marker">
                                <div className="timeline-dot"></div>
                                {exp.hasLine && <div className="timeline-line"></div>}
                            </div>
                            <div className="timeline-content">
                                <div className="experience-card">
                                    <div className="experience-header">
                                        <div className="experience-info">
                                            <h3 className="experience-title">{exp.title}</h3>
                                            <p className="experience-company">{exp.company}</p>
                                        </div>
                                        <div className="experience-meta">
                                            <span className="experience-date">
                                                <Calendar size={14} />
                                                {exp.date}
                                            </span>
                                            <span className="experience-location">
                                                <MapPin size={14} />
                                                {exp.location}
                                            </span>
                                            {exp.certificateLink && (
                                                <a
                                                    href={exp.certificateLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="experience-certificate"
                                                >
                                                    <ExternalLink size={14} />
                                                    View Certificate
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <div className="experience-body">
                                        <ul className="experience-list">
                                            {exp.points.map((point, i) => (
                                                <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                                            ))}
                                        </ul>
                                        <div className="experience-tags">
                                            {exp.tags.map((tag, i) => (
                                                <span className="tag" key={i}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
