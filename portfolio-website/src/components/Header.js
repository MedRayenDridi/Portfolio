// components/Header.js
import React, { useEffect, useRef, useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import './Header.css';

// Register the ScrollTo plugin
gsap.registerPlugin(ScrollToPlugin);

const Header = ({ darkMode, setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const navRef = useRef(null);
    const themeToggleRef = useRef(null);
    const mobileMenuRef = useRef(null);

    // Initialize animations on component mount
    useEffect(() => {
        const tl = gsap.timeline();

        // Animate logo
        tl.fromTo(logoRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
        );

        // Animate nav items with stagger
        tl.fromTo(".nav-item",
            { opacity: 0, y: -15 },
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(1.7)"
            },
            "-=0.3"
        );

        // Animate theme toggle
        tl.fromTo(themeToggleRef.current,
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.4, ease: "elastic.out(1, 0.8)" },
            "-=0.2"
        );
    }, []);

    // Header scroll effect and active section detection
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                headerRef.current.classList.add('scrolled');
            } else {
                headerRef.current.classList.remove('scrolled');
            }

            // Detect active section
            const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mobile menu animation
    useEffect(() => {
        if (isMenuOpen) {
            // Open menu animation
            gsap.to(mobileMenuRef.current, {
                duration: 0.4,
                x: 0,
                ease: "power2.out"
            });

            // Animate menu items
            gsap.fromTo(".mobile-nav-item",
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.4,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        } else {
            // Close menu animation
            gsap.to(mobileMenuRef.current, {
                duration: 0.4,
                x: "100%",
                ease: "power2.in"
            });
        }
    }, [isMenuOpen]);

    // Handle nav link clicks with smooth scroll
    const handleNavClick = (e, targetId) => {
        e.preventDefault();
        setIsMenuOpen(false);

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            // Use GSAP scrollTo with proper configuration
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: targetElement,
                    offsetY: 80
                },
                ease: "power2.inOut"
            });
        }
    };

    return (
        <>
            <header className="header" ref={headerRef}>
                <div className="container header-container">
                    <a
                        href="#home"
                        className="logo"
                        ref={logoRef}
                        onClick={(e) => handleNavClick(e, '#home')}
                    >
                        <span className="logo-text">Rayen</span>
                        <span className="logo-dot"></span>
                    </a>

                    <nav className="desktop-nav" ref={navRef}>
                        <ul className="nav-list">
                            {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                                <li key={item} className="nav-item">
                                    <a
                                        href={`#${item}`}
                                        className={`nav-link ${activeSection === item ? 'active' : ''}`}
                                        onClick={(e) => handleNavClick(e, `#${item}`)}
                                    >
                                        <span className="nav-text">{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                                        <span className="nav-underline"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div className="header-actions">
                        <button
                            className="theme-toggle"
                            ref={themeToggleRef}
                            onClick={() => setDarkMode(!darkMode)}
                            aria-label="Toggle dark mode"
                        >
                            <div className="theme-toggle-inner">
                                {darkMode ? <FaSun /> : <FaMoon />}
                            </div>
                        </button>

                        <button
                            className="mobile-menu-toggle"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu */}
            <div
                className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}
                ref={mobileMenuRef}
            >
                <div className="mobile-menu-content">
                    <ul className="mobile-nav-list">
                        {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                            <li key={item} className="mobile-nav-item">
                                <a
                                    href={`#${item}`}
                                    className={`mobile-nav-link ${activeSection === item ? 'active' : ''}`}
                                    onClick={(e) => handleNavClick(e, `#${item}`)}
                                >
                  <span className="mobile-nav-text">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mobile-menu-footer">
                        <p>Connect with me</p>
                        <div className="mobile-social-links">
                            <a href="#" aria-label="LinkedIn">LinkedIn</a>
                            <a href="#" aria-label="GitHub">GitHub</a>
                            <a href="mailto:rayendridi.943@gmail.com" aria-label="Email">Email</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div
                    className="mobile-menu-overlay"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </>
    );
};

export default Header;