import { Trophy, Medal, TrendingUp, GitPullRequest, Award, Crown, Cpu } from 'lucide-react';

const AchievementsSection = () => {
    const achievements = [
        {
            icon: Trophy,
            iconClass: 'trophy',
            title: '1st Position - Tic-Tech-Toe \'23',
            description: 'Led team among 100+ teams in hackathon conducted by IEEE',
        },
        {
            icon: Medal,
            iconClass: 'medal',
            title: '3rd Position - Tic-Tech-Toe \'25',
            description: 'Solo participation among 150+ teams (IEEE)',
        },
        {
            icon: TrendingUp,
            iconClass: 'code',
            title: 'Global Rank 123 - CodeChef',
            description: 'Starters-139 Div-3 Contest out of 4000+ participants',
        },
        {
            icon: GitPullRequest,
            iconClass: 'opensource',
            title: 'Hacktoberfest 2023',
            description: 'Merged PR to CyBear-Jinni (#669) for Flutter Project',
        },
        {
            icon: Award,
            iconClass: 'winner',
            title: 'Winter of Code 5.0 Winner',
            description: 'Android Category | Mentored 30+ students in WoC 6.0',
        },
    ];

    const positions = [
        {
            icon: Crown,
            title: 'Convener',
            organization: 'Microsoft Student Technical Club - DAIICT',
        },
        {
            icon: Cpu,
            title: 'Deputy Convener',
            organization: 'Electronics Hobby Club - DAIICT',
        },
    ];

    return (
        <section id="achievements" className="section">
            <div className="container">
                <div className="section-header">
                    <span className="section-tag">Recognition</span>
                    <h2 className="section-title">Achievements & Positions</h2>
                    <p className="section-subtitle">Milestones and responsibilities that shaped my journey</p>
                </div>

                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div className="achievement-card" key={index}>
                            <div className={`achievement-icon ${achievement.iconClass}`}>
                                <achievement.icon size={24} />
                            </div>
                            <div className="achievement-content">
                                <h4>{achievement.title}</h4>
                                <p>{achievement.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="positions-section">
                    <h3 className="positions-title">Positions of Responsibility</h3>
                    <div className="positions-grid">
                        {positions.map((position, index) => (
                            <div className="position-card" key={index}>
                                <div className="position-icon">
                                    <position.icon size={28} />
                                </div>
                                <div className="position-info">
                                    <h4>{position.title}</h4>
                                    <p>{position.organization}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
