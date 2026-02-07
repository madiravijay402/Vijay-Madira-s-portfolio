
import Madira_vijay_resume from './Madira_vijay_resume.pdf';
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import vjlogo from './vjlogo.png.png';
import smallgif from './smallgif.mp4';
import Page2 from './Page2';
import Page3 from './Page3';
import './Page1.css';

function Page1() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#about') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#projects') {
      projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="page-wrapper">
     
      <nav className="navbar-custom">
        <div className="nav-container">
          <a className="brand" href="/">
            <img src={vjlogo} alt="Logo" />
            <span>Vijay Madira</span>
          </a>
          <div className="nav-links">
            <a href="#about" className="nav-link">
              About me
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
          </div>
        </div>
      </nav>

     
      <section className="hero">
        <div className="hero-content">
          <div className="text-area">
            <h1>
              Hello, welcome to <br />
              <span>my portfolio!</span>
            </h1>
            <div className="btn-group">
              <a href={Madira_vijay_resume} download="Vijay_Madira_Resume" className="btn resume">
                Resume
              </a>
              <a href="https://github.com/madiravijay402"
                target="_blank"
                rel="noopener noreferrer"
                className="btn github"
              >
                GitHub
              </a>
              <a href="mailto:vijaymadira681@gmail.com" className="btn email">
                Email
              </a>
            </div>
          </div>
          <div className="video-container">
            <video
              src={smallgif}
              autoPlay
              loop
              muted
              playsInline
              className="hero-video"
            />
          </div>
        </div>
      </section>

     
      <section id="about" ref={aboutRef}>
        <Page2 />
      </section>

      
      <section id="projects" ref={projectsRef}>
        <Page3 />
      </section>
    </div>
    
  );
}

export default Page1;