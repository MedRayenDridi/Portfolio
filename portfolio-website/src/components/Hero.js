// components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-title">Rayen Dridi</h1>
                    <p className="hero-description">
                        A Financial Software Engineer & Full-Stack Developer specializing in
                        AI-powered financial applications and high-performance web systems.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn">View My Work</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-value">3+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">15+</span>
                            <span className="stat-label">Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value">5+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div style={{
                        width: '400px',
                        height: '400px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}>
                        RD
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;