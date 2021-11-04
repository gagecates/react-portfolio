import React from 'react'
import { Link } from "react-scroll";
import "./nav.scss"

export default function Nav({homeInView}) {

  const navLinks = [
    {"name": "Home", "section": 'home'},
    {"name": "About", "section": 'about'},
    {"name": "Work", "section": 'work'},
    {"name": "Skills", "section": 'skills'},
    {"name": "Contact", "section": 'contact'}
  ]

  return (
    <div>
      <div className={`header-nav ${!homeInView ? "fixed-nav" : ""}`}>
        {navLinks.map(link => (
          <Link
            key={link.id}
            to={link.section}
            spy={true}
            smooth={true}
            duration={700}
            className="header-link"
            activeClass='active'
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
