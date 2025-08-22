// components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-container">
                    <div className="footer-brand">
                        <h3>Rayen Dridi</h3>
                        <p>
                            Financial Software Engineer & Full-Stack Developer specializing in
                            AI-powered financial applications and high-performance web systems.
                        </p>
                        <div className="footer-social">
                            <a href="#" className="social-link">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="social-link">
                                <FaGithub />
                            </a>
                            <a href="#" className="social-link">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#experience">Experience</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">Financial Applications</a></li>
                            <li><a href="#">AI Integration</a></li>
                            <li><a href="#">Consulting</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Rayen Dridi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;