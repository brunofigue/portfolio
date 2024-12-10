# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



<img src={project.image} className="card-img-top" alt={project.title} />


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import About from './components/about';


const App = () => {
  return (
    <div>
      <Header />
        <Fade>
          <Hero />
            <Slide>
              <About/>
              <Technologies />
              <Projects />
            </Slide>
          <ContactForm />
          <Footer />
        </Fade>
    </div>
  );
};

export default App;
import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark text-white py-3 fixed-top w-100">
      <nav className="container d-flex justify-content-between">
        <h1 className="logo">Mi Portafolio</h1>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link text-white" href="#hero">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#projects">Proyectos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;





import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import Layout from './layout/Layout';  // Ruta correcta al Layout
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import About from './components/about';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"element={
              <>
                <Fade>
                  <Hero />
                </Fade>
                <Slide>
                  <About />
                </Slide>
                <Technologies />
                <Projects />
                <ContactForm />
              </>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
