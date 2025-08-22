// components/Projects.js
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "i-Budget Financial Management System",
            description: "A comprehensive financial ecosystem combining robust banking infrastructure with cutting-edge AI for personalized financial advice and automated wealth management.",
            features: [
                "LSTM transaction prediction system with 88% accuracy",
                "Monte Carlo budget optimization engine delivering 15% savings",
                "Intelligent notification system reducing defaults by 30%",
                "Event-driven architecture using Kafka (3,000 msg/sec throughput)",
                "Secure API gateway with JWT and OAuth2"
            ],
            technologies: ["Java", "Spring Boot", "React", "Python", "TensorFlow", "Kafka", "Docker"],
            githubUrl: "#",
            liveUrl: "#"
        },
        {
            id: 2,
            title: "Educational Platform with AI Features",
            description: "An educational platform enhanced with AI capabilities for predictive analysis and personalized learning experiences.",
            features: [
                "Predictive analysis module reducing administrative workload by 30%",
                "Academic history-based recommendation engine",
                "Analytical dashboard with progress visualization",
                "Contextual notifications via WebSocket"
            ],
            technologies: ["Spring Boot", "React", "JPA", "Spring Security", "Scikit-learn", "Pandas"],
            githubUrl: "#",
            liveUrl: "#"
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <p className="section-subtitle">My recent work</p>

                <div className="projects-grid">
                    {projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #c7d2fe 0%, #a5b4fc 100%)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--primary)',
                                    fontWeight: 'bold'
                                }}>
                                    {project.title}
                                </div>
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <ul>
                                    {project.features.map((feature, index) => (
                                        <li key={index} style={{fontSize: '0.9rem', marginBottom: '5px'}}>{feature}</li>
                                    ))}
                                </ul>
                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.githubUrl} className="btn">
                                        <FaGithub /> Code
                                    </a>
                                    <a href={project.liveUrl} className="btn btn-outline">
                                        <FaExternalLinkAlt /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;