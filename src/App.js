import React, { useEffect } from "react"

import './App.scss';
import './assets/flicker-animation.scss'
import HomeSection from "./sections/home"
import Nav from "./sections/nav"
import AboutSection from "./sections/about"
import WorkSection from "./sections/work"
import SkillsSection from "./sections/skills"
import ContactSection from "./sections/contact"
import Footer from "./sections/footer"

import { useInView } from 'react-intersection-observer'

function App() {
  const { ref, inView } = useInView()
  useEffect(() => {
    if (inView) {
      console.log('Home in view')
    }
    console.log(inView)
  }, [inView])

  return (
    <div className="App">
      <div ref={ref}><HomeSection/></div>
      <Nav homeInView={inView}/>
      <AboutSection/>
      <WorkSection/>
      <SkillsSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}

export default App;
