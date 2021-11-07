import React, {useState} from 'react'
import "./contact.scss"

export default function Contact() {

  const [nameValue, setNameValue] = useState(null)
  const [emailValue, setEmailValue] = useState(null)
  const [messageValue, setMessageValue] = useState(null)

  const handleFormSubmit = () => {
    console.log('submitted')
  }

  const handleNameChange = (event) => {
    setNameValue(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value)
  }

  const handleMessageChange= (event) => {
    setMessageValue(event.target.value)
  }
  return (
    <section id="contact" className="contact section-content">
      <h2 className="header-text">Contact Me</h2>
      <div className="contact-info">
        <h3>Feel free to give me a call or drop a message!</h3>
        <h4>Gage Cates</h4>
        <h4>gagecates10@gmail.com</h4>
        <h4>307-696-7124</h4>
      </div>
      <form action="https://formspree.io/f/xpzovrop" method="POST" onSubmit={handleFormSubmit} className="form">
        <input placeholder="Name" value={nameValue} onChange={handleNameChange} type="text" name="Name" className="contact-name" required/>
        <input placeholder="Email" value={emailValue} onChange={handleEmailChange} type="text" name="Email" className="contact-email" required/>
        <textarea placeholder="Message" value={messageValue} onChange={handleMessageChange} type="text" name="Message" className="contact-message" required/>
        <input type="submit" value="Submit" className="submit-btn"/>
      </form>
    </section>
  )
}
