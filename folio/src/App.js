import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';
import Contact from './component/Contact';
import './index.css';
import { IoHomeOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import { PiBook } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";

function App() {
  const ScrollEvent = (id) => () => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
      <div>
        <nav className='navbar'>
          {/* <div id='logo'>
            <h3>jaga</h3>
          </div> */}
          <div id='menus'>
            <div>
              <Link to='/' onClick={ScrollEvent('home')}><IoHomeOutline /></Link>
            </div>
            <div>
              <Link to='#about' onClick={ScrollEvent('about')}><LuUser2 /></Link>
            </div>
            <div>
              <Link to='#skills' onClick={ScrollEvent('skills')}><PiBook /></Link>
            </div>
            <div>
              <Link to='#projects' onClick={ScrollEvent('project')}><IoSettingsOutline /></Link>
            </div>
            <div>
              <Link to='#contact' onClick={ScrollEvent('contact')}><LuMessageCircle /></Link>
            </div>
          </div>
        </nav>
        <div>
          <Home />
          <About />
          <Skills />
          <Project />
          <Contact />
        </div>
      </div>
  );
}

export default App;
