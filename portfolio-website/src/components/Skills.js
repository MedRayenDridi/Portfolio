// components/Skills.js
import React from 'react';

const Skills = () => {
    const skillCategories = [
        {
            title: "Languages",
            skills: [
                { name: "Java", level: 90 },
                { name: "Python", level: 85 },
                { name: "JavaScript/TypeScript", level: 80 },
                { name: "SQL", level: 75 },
                { name: "C#", level: 70 },
                { name: "R", level: 65 }
            ]
        },
        {
            title: "Frontend",
            skills: [
                { name: "React", level: 85 },
                { name: "Angular", level: 75 },
                { name: "Next.js", level: 80 },
                { name: "TailwindCSS", level: 85 }
            ]
        },
        {
            title: "Backend",
            skills: [
                { name: "Spring Boot", level: 90 },
                { name: "Node.js", level: 80 },
                { name: ".NET Core", level: 75 },
                { name: "Flask", level: 70 },
                { name: "GraphQL", level: 65 }
            ]
        },
        {
            title: "Data & AI/ML",
            skills: [
                { name: "MySQL", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "MongoDB", level: 75 },
                { name: "TensorFlow", level: 70 },
                { name: "PyTorch", level: 65 },
                { name: "Scikit-learn", level: 75 }
            ]
        }
    ];

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <p className="section-subtitle">My technical abilities</p>

                <div className="skills-container">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <h3>{category.title}</h3>
                            <div className="skill-list">
                                {category.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-progress"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;