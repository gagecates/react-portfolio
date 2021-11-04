import React, { useState } from 'react'
import "./work.scss"

export default function WorkSection() {

  const companies = [
    {
      "name": "MRGN",
      "title": "Full Stack Developer",
      "startDate": "Jun 2021",
      "endDate": "Present",
      "duties": [
        "Contribute in the development of a full stack financial application using the latest technologies and frameworks.",
        "Create features utilizing React/Redux, Node.js, and AWS.",
        "Give personal insight on feature creation and development.",
        "Work closely with all teams in the development process to help deliver tasks in timely manner.",
      ]
    },
    {
      "name": "Insight Studios",
      "title": "Full Stack Developer",
      "startDate": "Jun 2021",
      "endDate": "Oct 2021",
      "duties": [
        "Assisted creating a full stack social application that was used in over 30 states.",
        "Create features utilizing React.js, Django, PostgreSQL, and Docker.",
        "Deploy staging and production code to AWS.",
        "Write tests to cover application using pytest.",
        "Configure scheduled tasks to interact with 3rd party API’s.",
        "Site analytic management using Google Analytics and Google Tag Manager."
      ]
    },
    {
      "name": "City of Gillette",
      "title": "Integrator/Programmer",
      "startDate": "Aug 2018",
      "endDate": "Jul 2021",
      "duties": [
        "Conducted programming and controls tasks for the SCADA system within the cities utilities departments.",
        "Networking and IT related duties for all departments.",
        "Acted as interim supervisor in the absence of my supervisor.",
        "Managed, developed, and preformed maintenence of schematics.",
        "Developed HMI and GUI programs for various system applications."
      ]
    },
  ]
  const [selected, setSelected] = useState(companies[0])

  const projects = [
    {
    "name": "Grid View",
    "languages": ["React", "Flask"]
    },
    {
      "name": "Trivia",
      "languages": ["React", "Flask"]
    },
    {
      "name": "Macros Yo!",
      "languages": ["HTML", "Flask"]
    },
    {
      "name": "Where To?",
      "languages": ["Js", "Node.js"]
    }
  ]



  return (
    <section id="work" className="work">
      <h2 className="header-text">Where I've Worked</h2>
      <div className="section-content">
        <div className="company-navbar">
          {companies.map((company, index) => (
            <h3 onClick={() => setSelected(companies[index])} className={`company-link ${company.name === selected.name ? "company-selected" : ""}`}>{company.name}</h3>
          ))}
        </div>
        <div key={selected.name} className="company-container">
          <h3 className="title">{selected.title} <span className="white">@ </span>{selected.name}</h3>
          <h4 className="date">{selected.startDate} - {selected.endDate}</h4>
          <ul className="duties-list">
            {selected.duties.map(duty => (
              <li>{duty}</li>
            ))}
          </ul>
        </div>
        <h2 className="header-text">Projects</h2>
        <div className="projects-container">
          {projects.map((project,index) => (
            <div key={index} className="project">
              <h3 className="project-title">{project.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
