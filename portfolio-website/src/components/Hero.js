// components/Hero.js
import React, { useEffect, useRef, Suspense, useState } from 'react';
import { gsap } from 'gsap';
import Particles from "@tsparticles/react";
import { Engine } from "@tsparticles/engine";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
    const { scene } = useGLTF('/computer-desk-area.glb');
    const scale = window.innerWidth <= 768 ? 0.07 : window.innerWidth <= 1024 ? 0.12 : 1.2;
    return <primitive object={scene} scale={scale} position={[0.5, -0.5, 0.5]} rotation={[0.1, -0.5, 0]} />;
}

const Hero = ({ darkMode }) => {
    const heroRef = useRef(null);
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const particlesInit = async (engine) => {
        const { loadSlim } = await import("@tsparticles/slim");
        await loadSlim(engine);
    };

    useEffect(() => {
        gsap.to([
            textRef.current.querySelector('.hero-greeting'),
            textRef.current.querySelector('.hero-title'),
            textRef.current.querySelector('.hero-description'),
            textRef.current.querySelector('.hero-buttons'),
            textRef.current.querySelector('.hero-stats')
        ], {
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        });

        gsap.to(imageRef.current, {
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        });
    }, []);

    return (
        <section id="home" className="hero" ref={heroRef}>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    fullScreen: { enable: false },
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fpsLimit: 60,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: darkMode ? "#f3f4f6" : "#0f172a",
                        },
                        links: {
                            color: darkMode ? "#f3f4f6" : "#0f172a",
                            distance: 150,
                            enable: true,
                            opacity: 0.15,
                            width: 1,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "out",
                            },
                            random: false,
                            speed: 0.6,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1000,
                            },
                            value: 60,
                        },
                        opacity: {
                            value: 0.15,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 2 },
                        },
                    },
                    detectRetina: true,
                }}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}
            />
            <div className="hero-content">
                <div className="hero-text" ref={textRef} style={{ 
                    width: '100%',
                    maxWidth: '600px',
                    textAlign: windowWidth <= 1024 ? 'center' : 'left',
                    marginTop: windowWidth <= 1024 ? '2rem' : '0',
                    marginLeft: windowWidth <= 1024 ? 'auto' : '0',
                    marginRight: windowWidth <= 1024 ? 'auto' : '0',
                    order: windowWidth <= 1024 ? 2 : 0
                }}>
                    <p className="hero-greeting" style={{ 
                        fontSize: '1.25rem', 
                        color: darkMode ? '#f3f4f6' : '#0f172a',
                        marginBottom: '0.75rem',
                        fontWeight: '500',
                        letterSpacing: '0.05em',
                        opacity: '0.9'
                    }}>Hello, I'm</p>
                    <h1 className="hero-title" style={{ 
                        fontSize: windowWidth <= 768 ? '3rem' : windowWidth <= 1024 ? '3.5rem' : '4.5rem', 
                        fontWeight: '800', 
                        color: darkMode ? '#f3f4f6' : '#0f172a',
                        marginBottom: '1.5rem',
                        position: 'relative',
                        display: 'inline-block',
                        zIndex: 1,
                        letterSpacing: '-0.02em',
                        lineHeight: '1.1'
                    }}>
                        <span style={{
                            background: darkMode 
                                ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
                                : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                            position: 'absolute',
                            top: '0.2em',
                            left: '0.1em',
                            right: 0,
                            bottom: 0,
                            zIndex: -1,
                            opacity: darkMode ? 0.2 : 0.3
                        }}></span>
                        Rayen Dridi
                    </h1>
                    <p className="hero-description" style={{ 
                        fontSize: '1.4rem', 
                        color: darkMode ? '#9ca3af' : '#475569', 
                        marginBottom: '2.5rem',
                        lineHeight: '1.7',
                        maxWidth: '540px',
                        fontWeight: '400'
                    }}>
                        A Financial Software Engineer & Full-Stack Developer specializing in
                        AI-powered financial applications and high-performance web systems.
                    </p>
                    <div className="hero-buttons" style={{ 
                        marginBottom: '4rem',
                        display: 'flex',
                        flexDirection: windowWidth <= 768 ? 'column' : 'row',
                        gap: windowWidth <= 768 ? '1rem' : '0',
                        alignItems: windowWidth <= 1024 ? 'center' : 'flex-start'
                    }}>
                        <a href="#projects" className="btn" style={{
                            padding: '1.2rem 2.5rem',
                            background: darkMode ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                            color: 'white',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            marginRight: '1.5rem',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(15, 23, 42, 0.15)',
                            transform: 'translateY(0)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            letterSpacing: '0.5px'
                        }}>
                            <span>View My Work</span>
                            <svg style={{ marginLeft: '8px' }} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </a>
                        <a href="#contact" className="btn btn-outline" style={{
                            padding: '1.2rem 2.5rem',
                            border: `2px solid ${darkMode ? '#f3f4f6' : '#0f172a'}`,
                            color: darkMode ? '#f3f4f6' : '#0f172a',
                            borderRadius: '50px',
                            textDecoration: 'none',
                            fontWeight: '600',
                            fontSize: '1.1rem',
                            transition: 'all 0.3s ease',
                            display: 'inline-flex',
                            alignItems: 'center',
                            letterSpacing: '0.5px'
                        }}>Contact Me</a>
                    </div>
                    <div className="hero-stats" style={{ 
                        display: 'flex', 
                        gap: windowWidth <= 768 ? '2rem' : '4rem',
                        color: darkMode ? '#9ca3af' : '#475569',
                        flexWrap: windowWidth <= 768 ? 'wrap' : 'nowrap',
                        justifyContent: windowWidth <= 768 ? 'space-between' : 'flex-start'
                    }}>
                        <div className="stat-item" style={{
                            position: 'relative',
                            paddingRight: '2rem',
                            borderRight: darkMode ? '2px solid rgba(255, 255, 255, 0.1)' : '2px solid rgba(15, 23, 42, 0.1)'
                        }}>
                            <span className="stat-value" style={{ 
                                display: 'block',
                                fontSize: '2.75rem',
                                fontWeight: '800',
                                color: darkMode ? '#60a5fa' : '#0f172a',
                                marginBottom: '0.5rem',
                                letterSpacing: '-0.02em',
                                textShadow: darkMode ? '0 0 10px rgba(96, 165, 250, 0.3)' : 'none'
                            }}>3+</span>
                            <span className="stat-label" style={{
                                fontSize: '1rem',
                                fontWeight: '500',
                                color: darkMode ? '#9ca3af' : '#475569'
                            }}>Years Experience</span>
                        </div>
                        <div className="stat-item" style={{
                            position: 'relative',
                            paddingRight: '2rem',
                            borderRight: darkMode ? '2px solid rgba(255, 255, 255, 0.1)' : '2px solid rgba(15, 23, 42, 0.1)'
                        }}>
                            <span className="stat-value" style={{ 
                                display: 'block',
                                fontSize: '2.75rem',
                                fontWeight: '800',
                                color: darkMode ? '#60a5fa' : '#0f172a',
                                marginBottom: '0.5rem',
                                letterSpacing: '-0.02em',
                                textShadow: darkMode ? '0 0 10px rgba(96, 165, 250, 0.3)' : 'none'
                            }}>15+</span>
                            <span className="stat-label" style={{
                                fontSize: '1rem',
                                fontWeight: '500',
                                color: darkMode ? '#9ca3af' : '#475569'
                            }}>Projects Completed</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-value" style={{ 
                                display: 'block',
                                fontSize: '2.75rem',
                                fontWeight: '800',
                                color: darkMode ? '#60a5fa' : '#0f172a',
                                marginBottom: '0.5rem',
                                letterSpacing: '-0.02em',
                                textShadow: darkMode ? '0 0 10px rgba(96, 165, 250, 0.3)' : 'none'
                            }}>5+</span>
                            <span className="stat-label" style={{
                                fontSize: '1rem',
                                fontWeight: '500',
                                color: darkMode ? '#9ca3af' : '#475569'
                            }}>Happy Clients</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image" ref={imageRef} style={{
                    position: 'relative',
                    width: '100%',
                    height: windowWidth <= 768 ? '400px' : '600px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'visible'
                }}>
                    <Canvas 
                        camera={{ position: [4, 2, 4], fov: 40 }}
                        style={{
                            background: 'transparent',
                            width: '100%',
                            height: '100%',
                            borderRadius: '10px',
                        }}
                    >
                        <ambientLight intensity={3.5} />
                        <directionalLight 
                            position={[10, 10, 5]} 
                            intensity={3} 
                            castShadow
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                            shadow-camera-far={50}
                            shadow-camera-near={0.1}
                        />
                        <directionalLight position={[-10, -10, -5]} intensity={1.5} />
                        <pointLight position={[0, 2, 5]} intensity={0.8} color="#ffffff" />
                        <pointLight position={[-5, 5, 0]} intensity={0.6} color="#60a5fa" />
                        <spotLight
                            position={[5, 5, 5]}
                            angle={0.4}
                            penumbra={1}
                            intensity={1.8}
                            castShadow
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                        />
                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                        <OrbitControls 
                            enableZoom={false}
                            autoRotate
                            autoRotateSpeed={0.8}
                            maxPolarAngle={Math.PI / 1}
                            minPolarAngle={Math.PI / 4}
                        />
                    </Canvas>
                </div>
            </div>
        </section>
    );
};

export default Hero;