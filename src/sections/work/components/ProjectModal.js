import React, {useEffect, useRef} from 'react'
import "./projectModal.scss"

export default function ProjectModal({handleClose, project}) {
  const wrapperRef = useRef(null)

  // close modal on outside click
  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      handleClose()
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, false)
    return () => {
      document.removeEventListener("click", handleClickOutside, false)
    }
  }, [])

  return (
    <div ref={wrapperRef} className="project-modal-container">
      <div className="project-modal-image" style={{backgroundImage: `url(${project.background})`}}/>
      <div className="project-modal-bottom">
        <div className="project-header">
          <h3 className="project-modal-title">{project.name}</h3>
          <span className="project-languages">{project.languages}</span>
        </div>
        <p className="project-modal-summary">{project.summary}</p>
        <div className="project-modal-btn-container">
          <a href={project.site} target="_blank" className="project-modal-btn">View Site</a>
          <a href={project.repo} target="_blank" className="project-modal-btn">View Repo</a>
        </div>
        <div onClick={handleClose} className="close">
          x
        </div>
      </div>
    </div>
  )
}
