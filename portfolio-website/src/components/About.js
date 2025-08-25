// components/About.js
import React, { useEffect, useRef } from 'react';
import { 
    FaUser, 
    FaMapMarkerAlt, 
    FaEnvelope, 
    FaPhone, 
    FaDownload, 
    FaArrowRight, 
    FaGraduationCap,
    FaRocket,
    FaStar,
    FaHeart,
    FaLightbulb
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = ({ darkMode }) => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const particlesRef = useRef(null);

    // GSAP animations (unchanged from your original code)
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Enhanced floating particles animation
            gsap.utils.toArray('.floating-particle').forEach((particle, index) => {
                gsap.to(particle, {
                    y: -15,
                    x: Math.random() * 20 - 10,
                    rotation: 360,
                    duration: 3 + Math.random() * 2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    delay: index * 0.3
                });
            });

            // Animate section title with stagger effect
            gsap.fromTo('.section-title-word',
                {
                    opacity: 0,
                    y: 50,
                    scale: 0.8,
                    rotationX: -90
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotationX: 0,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: '.section-title',
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Animate section subtitle with typing effect
            gsap.fromTo('.section-subtitle',
                {
                    opacity: 0,
                    y: 20,
                    scale: 0.95
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    delay: 0.4,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.section-subtitle',
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Enhanced profile image animation with 3D effect
            gsap.fromTo(imageRef.current,
                {
                    opacity: 0,
                    scale: 0.6,
                    y: 60,
                    rotationY: -45,
                    z: -100
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    rotationY: 0,
                    z: 0,
                    duration: 1.4,
                    ease: 'back.out(1.2)',
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Continuous floating animation with more dynamic movement
            gsap.to(imageRef.current, {
                y: -12,
                x: 3,
                rotation: 1,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Animate content items with enhanced effects
            gsap.utils.toArray('.about-content-item').forEach((item, index) => {
                gsap.fromTo(item,
                    {
                        opacity: 0,
                        x: -40,
                        y: 20,
                        scale: 0.95
                    },
                    {
                        opacity: 1,
                        x: 0,
                        y: 0,
                        scale: 1,
                        duration: 0.8,
                        delay: index * 0.15,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            // Enhanced info items animation
            gsap.utils.toArray('.info-item').forEach((item, index) => {
                gsap.fromTo(item,
                    {
                        opacity: 0,
                        scale: 0.8,
                        y: 30,
                        rotation: -5
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        rotation: 0,
                        duration: 0.7,
                        delay: index * 0.1,
                        ease: 'back.out(1.4)',
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 95%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            // Animate action buttons
            gsap.utils.toArray('.action-btn').forEach((btn, index) => {
                gsap.fromTo(btn,
                    {
                        opacity: 0,
                        y: 30,
                        scale: 0.9
                    },
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        duration: 0.6,
                        delay: 0.8 + index * 0.1,
                        ease: 'back.out(1.4)',
                        scrollTrigger: {
                            trigger: btn,
                            start: 'top 95%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleDownloadCV = () => {
        // Create a temporary link to download the CV
        const link = document.createElement('a');
        link.href = '/rayen-dridi-cv.pdf';
        link.download = 'Rayen_Dridi_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            {/* Floating particles background */}
            <div className="floating-particles" ref={particlesRef}>
                {[...Array(15)].map((_, index) => (
                    <div
                        key={index}
                        className="floating-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>
            
            {/* Gradient overlay */}
            <div className="gradient-overlay"></div>

            <div className="container">
                <div className="about-main-content">
                    {/* Enhanced Profile Image Section */}
                    <div className="about-image-section">
                        <div className="image-background-glow"></div>
                        <Tilt
                            tiltEnable={true}
                            tiltMaxAngleX={20}
                            tiltMaxAngleY={20}
                            perspective={1200}
                            scale={1.08}
                            transitionSpeed={2000}
                            glareEnable={true}
                            glareMaxOpacity={0.3}
                            glareColor="#4f46e5"
                            glarePosition="all"
                            glareBorderRadius="25px"
                        >
                            <div
                                ref={imageRef}
                                className="profile-image-container-enhanced"
                            >
                                {/* Animated border rings */}
                                <div className="border-ring ring-1"></div>
                                <div className="border-ring ring-2"></div>
                                <div className="border-ring ring-3"></div>

                                <img
                                    src="/me.png"
                                    alt="Rayen Dridi"
                                    className="profile-image-enhanced"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />

                                {/* Enhanced fallback */}
                                <div className="profile-image-fallback-enhanced">
                                    <div className="fallback-avatar">
                                        <FaUser className="avatar-icon" />
                                    </div>
                                    <span className="fallback-text">Rayen Dridi</span>
                                </div>

                                {/* Enhanced hover overlay with animations */}
                                <div className="profile-overlay-enhanced">
                                    <div className="overlay-content-enhanced">
                                        <div className="overlay-icon-container">
                                            <FaRocket className="overlay-main-icon" />
                                        </div>
                                        <span className="overlay-title">Software Engineer</span>
                                        <span className="overlay-subtitle">Full-Stack Developer</span>
                                        <div className="overlay-decorative-line"></div>
                                    </div>
                                </div>

                                {/* Status indicator */}
                                <div className="status-indicator">
                                    <div className="status-dot"></div>
                                    <span className="status-text">Available for work</span>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    {/* Enhanced Content Section */}
                    <div className="about-content-enhanced" ref={contentRef}>
                        <div className="content-header">
                            <h3 className="about-content-item content-title">
                                <FaGraduationCap className="title-icon" />
                                Financial Software Engineer
                            </h3>
                            <div className="title-underline"></div>
                        </div>

                        {/* Main content with two columns */}
                        <div className="about-content-columns">
                            {/* Left Column - Introduction */}
                            <div className="about-intro-column">
                                <div className="intro-text">
                                    <p className="about-content-item content-paragraph primary">
                                        As a passionate software engineering student specializing in 
                                        <strong> Actuarial Science & Financial Computing</strong> at ESPRIT Tunis, 
                                        I bring over <strong>3 years of experience</strong> in full-stack development. 
                                        My focus is on creating secure, scalable architectures that effectively address 
                                        real-world business challenges, particularly in the financial sector.
                                    </p>
                                    
                                    <div className="about-actions-enhanced">
                                        <button className="btn-enhanced btn-primary-enhanced action-btn" onClick={scrollToContact}>
                                            <div className="btn-content">
                                                <FaHeart className="btn-icon" />
                                                <span>Let's Work Together</span>
                                            </div>
                                            <div className="btn-glow"></div>
                                            <div className="btn-particles">
                                                {[...Array(6)].map((_, i) => (
                                                    <div key={i} className="btn-particle"></div>
                                                ))}
                                            </div>
                                        </button>
                                        
                                        <button className="btn-enhanced btn-outline-enhanced action-btn" onClick={handleDownloadCV}>
                                            <div className="btn-content">
                                                <FaDownload className="btn-icon" />
                                                <span>Download CV</span>
                                            </div>
                                            <div className="btn-shine"></div>
                                        </button>
                                    </div>

                                    <p className="about-content-item content-paragraph secondary">
                                        I am deeply interested in the intersection of <em>finance and technology</em>, 
                                        and I actively seek opportunities to leverage AI and machine learning 
                                        to tackle complex financial challenges. My ambition is to bridge the gap between 
                                        traditional finance and cutting-edge technology.
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div className="contact-info-section">
                                    <h4 className="contact-title">
                                        <FaLightbulb className="info-title-icon" />
                                        Let's Connect
                                    </h4>
                                    <div className="contact-grid">
                                        {[
                                            { icon: FaUser, text: 'Rayen Dridi', label: 'Full Name' },
                                            { icon: FaMapMarkerAlt, text: 'Tunis, Tunisia', label: 'Location' },
                                            { icon: FaEnvelope, text: 'rayendridi.943@gmail.com', label: 'Email' },
                                            { icon: FaPhone, text: '+216 29 663 915', label: 'Phone' }
                                        ].map((item, index) => (
                                            <div key={index} className="contact-item">
                                                <div className="contact-icon-container">
                                                    <item.icon className="contact-icon" />
                                                </div>
                                                <div className="contact-details">
                                                    <span className="contact-label">{item.label}</span>
                                                    <span className="contact-text">{item.text}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Content Section */}
                <div className="about-additional-content">
                    <div className="content-header">
                        <h3 className="content-title">
                            <FaRocket className="title-icon" />
                            My Mission
                        </h3>
                    </div>
                    <p className="content-paragraph">
                        My mission is to bridge the gap between finance and technology, creating innovative solutions 
                        that make financial services more accessible, efficient, and secure. Through continuous learning 
                        and application of cutting-edge technologies, I aim to contribute to the evolution of 
                        financial technology and create meaningful impact in the industry.
                    </p>
                </div>
            </div>

            {/* Section curve */}
            <svg className="section-curve" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
                <path fill="currentColor" d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"></path>
            </svg>
        </section>
    );
};

export default About;