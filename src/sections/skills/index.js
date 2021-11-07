import React from 'react'
import ProgressBar from "./ProgressBar"
import UdacityPic from "../../assets/images/udacity.png"
import UdemyPic from "../../assets/images/udemy.png"
import FullStackCert from "../../assets/images/fullstack.png"
import FrontEndCert from "../../assets/images/frontend.png"
import "./skills.scss"

export default function SkillsSection() {

  const languages = [
    {"label": "Python", "percentage": "84"},
    {"label": "JavaScript", "percentage": "82"},
    {"label": "React", "percentage": "80"},
    {"label": "Django", "percentage": "70"},
    {"label": "Node.js", "percentage": "60"},
    {"label": "Redux", "percentage": "60"},
    {"label": "PostgreSQL", "percentage": "50"},
  ]

  const education = [
    {
      "source": UdacityPic,
      "title": "Full Stack Nanodegree",
      "date": "Oct 2020",
      "description": "Full stack web development program. Building fully functional database backed and deployed applications.",
      "bullets": [
        "Configure user authentication and access control for an application backend.",
        "Design and build a database for an application.",
        "Create and deploy a database-backed web API.",
        "Deploy a Flask-based web application to the cloud using Docker and Kubernetes.",
      ],
      "color": "blue",
      "pic": FullStackCert
    },
    {
      "source": UdacityPic,
      "title": "Front End Nanodegree",
      "date": "Nov 2020",
      "description": "Front end web development program. Learned the fundementals of front end applications. Webpack built responsive front end with a Node.js backend.",
      "bullets": [
        "Construct responsive websites using CSS, Flexbox and CSS Grid.",
        "Develop interactive websites and UI applications using JavaScript and HTML.",
        "Connect applications to backend server using JavaScript and Node.js.",
        "Integrate application build and deployment using Webpack and Service Workers.",
        "Application testing with Jest"
      ],
      "color": "blue",
      "pic": FrontEndCert
    },
    {
      "source": UdemyPic,
      "title": "Modern React with Redux",
      "date": "Jan 2021",
      "description": "Modern React/Redux program. Learned the ins and outs of building Redux applications. Fully functional React apps built.",
      "bullets": [
        "Learn the fundamental features of React, including JSX, state, and props.",
        "Build functional projects using class and functional components.",
        "Understanding the lifesycle methods.",
        "React API requests using Ajax.",
      ],
      "color": "red",
      "pic": null
    },
  ]


  return (
    <section id="skills" className="skills">
      <h2 className="header-text">Skills</h2>
      <div className="section-content">
        <div className="bar-container">
          {languages.map((language, index) => (
            <ProgressBar
              key={index}
              label={language.label}
              percent={language.percentage}
            />
          ))}
        </div>
        <h2 className="header-text">Education/Certification</h2>
        <div className="education-container">
          {education.map(course => (
              <div className="course-container">
                <div className="flex-box">
                  <div className="title-info">
                    <img className={`course-source ${course.color}`} src={course.source} alt="course source"/>
                    <h4 className="course-title">{course.title}</h4>
                    <h5 className="course-date">{course.date}</h5>
                  </div>
                  {course.pic && (
                    <div className="course-pic">
                      <img src={course.pic} alt="course-pic"/>
                    </div>
                  )}
                </div>
                <p className="course-description">{course.description}</p>
                <ul className="list">
                  {course.bullets.map(bullet => (
                    <li className="course-bullet">{bullet}</li>
                  ))}
                </ul>
              </div>
          ))}
        </div>
      </div>
    </section>
  )
}
