import React, { useState } from 'react'

// project images
import GridViewImage from "../../assets/images/grid-view-landing.png"
import TriviaImage from "../../assets/images/trivia-landing.jpg"
import MacrosYoImage from "../../assets/images/macros-yo-project.jpg"
import WhereToImage from "../../assets/images/where-to-project.jpg"
import AppointmentsImage from "../../assets/images/appointments-project.jpg"
import SkyScannerImage from "../../assets/images/sky-scanner-project.jpeg"
import StudentSearchImage from "../../assets/images/student-search-project.jpeg"

// project background images
import GridViewBackground from "../../assets/images/grid-view-home.png"
import TriviaBackground from "../../assets/images/trivia-home.png"
import MacrosYoBackground from "../../assets/images/macros-yo-home.png"
import WhereToBackground from "../../assets/images/where-to-home.png"
import AppointmentsBackground from "../../assets/images/appointments-home.png"
import SkyScannerBackground from "../../assets/images/sky-scanner-home.png"
import StudentSearchBackground from "../../assets/images/student-search-home.png"


import ProjectModal from "./components/ProjectModal"
import "./work.scss"

export default function WorkSection() {

  const [hovered, setHovered] = useState(false)
  const [projectModalVisible, setProjectModalVisible] = useState(false)
  const [project, setProject] = useState(null)

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
      "name": "Student Search",
      "languages": ["React", "Firebase"],
      "image": StudentSearchImage,
      "color": "#1a75ff",
      "background": StudentSearchBackground,
      "summary": "This is a simple React app that demonstrates filtering by name or tag name. Users can apply tags to specific users and filter accordingly. Deployed Via Heroku.",
      "site": "https://gmc-student-search.herokuapp.com/",
      "repo": "https://github.com/gagecates/studend-search"
    },
    {
      "name": "Let Me Check My Schedule",
      "languages": ["React", "Firebase"],
      "image": AppointmentsImage,
      "color": "#1a75ff",
      "background": AppointmentsBackground,
      "summary": "This is a React/Firebase application that allows users to sign up and begin scheduling appointments with other users. It uses authentication to provide users a unique profile. All data is stored via Firestore.",
      "site": "https://pocket-rn-7b032.web.app/login",
      "repo": "https://github.com/gagecates/appointment-schedule"
    },
    {
      "name": "SkyScanner",
      "languages": ["Next.js", "Vercel"],
      "image": SkyScannerImage,
      "color": "#1a75ff",
      "background": SkyScannerBackground,
      "summary": "This is a simple static application that shows different flight schedules and departures. Built and deployed using Next.js and Vercel",
      "site": "https://evergreen-financing.vercel.app/",
      "repo": "https://github.com/gagecates/evergreen-financing"
    },
    {
    "name": "Grid View",
    "languages": ["React", "Flask"],
    "image": GridViewImage,
    "color": "#1a75ff",
    "background": GridViewBackground,
    "summary": "Allows users to view a specific portion of the electric grid determined by their chosen starting node and depth. Utilizing a breadth-first search algorithm in a Flask backend, it displays the nodes in React.",
    "site": "https://grid-view-gmc.herokuapp.com/",
    "repo": "https://github.com/gagecates/grid-graph"
    },
    {
      "name": "Trivia",
      "languages": ["React", "Flask"],
      "image": TriviaImage,
      "color": "#e60000",
      "background": TriviaBackground,
      "summary": "Trivia is a fun and classic game to test your knowledge of a variety of categories. Python and SQLAlchemy bring this application together on a FLask backend.",
      "site": "",
      "repo": ""
    },
    {
      "name": "Macros Yo!",
      "languages": ["HTML", "Flask"],
      "image": MacrosYoImage,
      "color": "#00cc00",
      "background": MacrosYoBackground,
      "summary": "Macros Yo is a way for users to track their consumed macros. The database backed application allows users to enter and save foods while providing the nutritional macro break down. Authentication is provided via Auth 0.",
      "site": "",
      "repo": ""
    },
    {
      "name": "Where To?",
      "languages": ["Js", "Node.js"],
      "image": WhereToImage,
      "color": "#ffff00",
      "background": WhereToBackground,
      "summary": "Where To is a usefull resource for users to get a projected forecast for a desired location. The application utilizes multiple API's in order to gather the destination coordinates and weather forecast according to the arrival date.",
      "site": "",
      "repo": ""
    }
  ]

  const handleProjectClick = (project) => {
    setProject(project)
    setProjectModalVisible(true)
    console.log(project)
  }



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
            <div>
              <div
                key={index}
                className="project"
                style={{backgroundImage: `url(${project.image})`}}
                onMouseEnter={() => setHovered(project.name)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => handleProjectClick(project)}
              />
                <h3 className="project-title">{project.name}</h3>
            </div>
          ))}
        </div>
        {projectModalVisible &&
          <ProjectModal
            project={project}
            handleClose={() => setProjectModalVisible(false)}
          />
        }
      </div>
    </section>
  )
}
