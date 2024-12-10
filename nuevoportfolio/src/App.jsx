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
            path="/"element={(
              <>
                <Fade>
                <Slide>
                  <Hero />
                  <About />
                  <Technologies />
                  <Projects />
                  <ContactForm />
                </Slide>
                </Fade>
              </>
            )}
          />
          <Route path="/about" element={<About />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
