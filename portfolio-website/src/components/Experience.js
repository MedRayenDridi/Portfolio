// components/Experience.js
import React from 'react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Engineering Intern",
            company: "ATB (Arab Tunisian Bank)",
            period: "June – July 2025",
            location: "Tunis, Tunisia",
            description: "Development of an internal customer complaint management application covering 10+ business flow types. Automation of workflow, intelligent ticket routing and multi-criteria search.",
            achievements: [
                "Estimated 30% reduction in processing time",
                "Interactive reports for 6+ operational departments",
                "AI feasibility study for predictive analysis of high-risk claims"
            ],
            technologies: ["Spring Boot", "React", "MySQL", "AI Integration"]
        },
        {
            id: 2,
            title: "IT Department Intern",
            company: "ESPRIT Tunis",
            period: "Summer 2024",
            location: "Ariana, Tunisia",
            description: "Development of AI features for an educational platform with predictive analysis module.",
            achievements: [
                "Reduced administrative workload by 30%",
                "Improved system performance by 25% through code optimization",
                "Contributed to architecture redesign for better scalability"
            ],
            technologies: ["Spring Boot", "ReactJS", "JPA", "Spring Security", "Scikit-learn", "Pandas"]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">My professional journey</p>

                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={exp.id} className="timeline-item">
                            <div className="timeline-content">
                                <div className="timeline-date">{exp.period} | {exp.location}</div>
                                <h3 className="timeline-title">{exp.title} - {exp.company}</h3>
                                <p className="timeline-description">{exp.description}</p>
                                <ul>
                                    {exp.achievements.map((achievement, i) => (
                                        <li key={i}>{achievement}</li>
                                    ))}
                                </ul>
                                <div className="timeline-tech">
                                    {exp.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;