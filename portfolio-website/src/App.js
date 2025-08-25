// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check system preference for dark mode
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark-mode');
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            document.documentElement.setAttribute('data-theme', 'light');
        }
    }, [darkMode]);

    return (
        <div className="App">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero darkMode={darkMode} />
            <About darkMode={darkMode} />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;