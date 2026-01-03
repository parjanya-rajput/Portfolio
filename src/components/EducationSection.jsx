import { Building2, MapPin, Calendar, Code2, Layers, BookOpen, Target } from 'lucide-react';

const EducationSection = () => {
    const skills = {
        languages: ['C++', 'Dart', 'JavaScript', 'SQL', 'TypeScript', 'Java', 'Kotlin', 'Go'],
        frameworks: ['Flutter', 'React Native', 'React', 'Next.js', 'Redux', 'Android'],
        coursework: ['Data Structures & Algorithms', 'Computer Networks', 'DBMS', 'OOPs'],
    };

    return (
        <section id="education" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Learning</span>
                    <h2 className="section-title">Education</h2>
                    <p className="section-subtitle">My academic journey and technical expertise</p>
                </div>

                <div className="education-grid">
                    <div className="education-card">
                        <div className="education-icon">
                            <Building2 size={32} />
                        </div>
                        <div className="education-details">
                            <h3 className="education-degree">B.Tech, Information and Communication Technology</h3>
                            <p className="education-institution">
                                Dhirubhai Ambani Institute of Information and Communication Technology (DA-IICT)
                            </p>
                            <div className="education-meta">
                                <span className="education-location">
                                    <MapPin size={16} />
                                    Gandhinagar, India
                                </span>
                                <span className="education-duration">
                                    <Calendar size={16} />
                                    Oct 2022 – Present
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* JEE Achievement Card */}
                    <div className="education-card achievement-highlight">
                        <div className="education-icon">
                            <Target size={32} />
                        </div>
                        <div className="education-details">
                            <h3 className="education-degree">JEE Mains 2022</h3>
                            <p className="education-institution">
                                99.09 Percentile | All India Rank 8236
                            </p>
                            <div className="education-meta">
                                <span className="education-location">
                                    <Target size={16} />
                                    Cleared JEE Advanced 2022
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="skills-section">
                    <h3 className="skills-title">Technical Skills</h3>

                    <div className="skills-grid">
                        <div className="skill-category">
                            <h4 className="skill-category-title">
                                <Code2 size={20} />
                                Languages
                            </h4>
                            <div className="skill-tags">
                                {skills.languages.map((skill, i) => (
                                    <span className="skill-tag" key={i}>{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4 className="skill-category-title">
                                <Layers size={20} />
                                Frameworks & Tools
                            </h4>
                            <div className="skill-tags">
                                {skills.frameworks.map((skill, i) => (
                                    <span className="skill-tag" key={i}>{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="skill-category">
                            <h4 className="skill-category-title">
                                <BookOpen size={20} />
                                Coursework
                            </h4>
                            <div className="skill-tags">
                                {skills.coursework.map((skill, i) => (
                                    <span className="skill-tag" key={i}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;
