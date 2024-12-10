import React from 'react';
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


const App = () => {
  return (
    <div>
      <Header />
        <Fade>
          <Hero />
            <Slide>
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
