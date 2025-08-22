// components/About.js
import React, { useEffect, useRef } from 'react';
import { FaUser, FaMapMarkerAlt, FaEnvelope, FaPhone, FaDownload, FaArrowRight } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    // GSAP animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate section title with fancy effect
            gsap.fromTo('.section-title',
                {
                    opacity: 0,
                    y: 30,
                    scale: 0.9
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.section-title',
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Animate section subtitle
            gsap.fromTo('.section-subtitle',
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 0.2,
                    scrollTrigger: {
                        trigger: '.section-subtitle',
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Special animation for profile image
            gsap.fromTo(imageRef.current,
                {
                    opacity: 0,
                    scale: 0.8,
                    y: 30
                },
                {
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    duration: 1,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Add continuous floating animation to profile image
            gsap.to(imageRef.current, {
                y: -8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Animate content items
            gsap.utils.toArray('.about-content-item').forEach((item, index) => {
                gsap.fromTo(item,
                    {
                        opacity: 0,
                        x: -20
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.6,
                        delay: index * 0.1,
                        scrollTrigger: {
                            trigger: item,
                            start: 'top 90%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            });

            // Animate info items
            gsap.utils.toArray('.info-item').forEach((item, index) => {
                gsap.fromTo(item,
                    {
                        opacity: 0,
                        scale: 0.9,
                        y: 15
                    },
                    {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        duration: 0.5,
                        delay: index * 0.08,
                        scrollTrigger: {
                            trigger: item,
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
        <section id="about" className="section about-section" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Get to know me better</p>

                <div className="about-grid">
                    {/* Profile Image with Enhanced Tilt effect */}
                    <div className="about-image">
                        <Tilt
                            tiltEnable={true}
                            tiltMaxAngleX={8}
                            tiltMaxAngleY={8}
                            glareEnable={true}
                            glareMaxOpacity={0.15}
                            glareColor="#ffffff"
                            glarePosition="all"
                            scale={1.03}
                        >
                            <div
                                ref={imageRef}
                                className="profile-image-container"
                            >
                                <img
                                    src="/me.png"
                                    alt="Rayen Dridi"
                                    className="profile-image"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.nextSibling.style.display = 'flex';
                                    }}
                                />

                                {/* Fallback when image fails to load */}
                                <div className="profile-image-fallback">
                                    <FaUser className="profile-avatar" />
                                    <span>Rayen Dridi</span>
                                </div>

                                {/* Improved hover overlay */}
                                <div className="profile-overlay">
                                    <div className="overlay-content">
                                        <span className="overlay-text">Software Engineer</span>
                                        <FaArrowRight className="overlay-icon" />
                                    </div>
                                </div>
                            </div>
                        </Tilt>
                    </div>

                    <div className="about-content" ref={contentRef}>
                        <h3 className="about-content-item">Financial Software Engineer</h3>
                        <p className="about-content-item">
                            I'm a passionate software engineering student specializing in Actuarial Science &
                            Financial Computing at ESPRIT Tunis. With over 3 years of experience in full-stack
                            development, I focus on creating secure, scalable architectures that solve real-world
                            business problems, particularly in the financial sector.
                        </p>
                        <p className="about-content-item">
                            I'm deeply interested in the intersection of finance and technology, and I'm always
                            looking for opportunities to apply AI and machine learning to solve complex financial
                            challenges.
                        </p>

                        <div className="about-info">
                            {[
                                { icon: FaUser, text: 'Rayen Dridi' },
                                { icon: FaMapMarkerAlt, text: 'Tunis, Tunisia' },
                                { icon: FaEnvelope, text: 'rayendridi.943@gmail.com' },
                                { icon: FaPhone, text: '+216 29 663 915' }
                            ].map((item, index) => (
                                <div key={index} className="info-item">
                                    <item.icon className="info-icon" />
                                    <span>{item.text}</span>
                                </div>
                            ))}
                        </div>

                        <div className="about-actions">
                            <button className="btn btn-primary" onClick={scrollToContact}>
                                Contact Me
                                <div className="btn-hover-effect"></div>
                            </button>
                            <button className="btn btn-outline" onClick={handleDownloadCV}>
                                <FaDownload className="btn-icon" />
                                Download CV
                                <div className="btn-hover-effect"></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;