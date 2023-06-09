import React from 'react'

import './index.scss'

const Contact = () => {
  return (
    <div className="contact__section" id="section-5">
      <h2>Contact</h2>
      <div className="contact__form">
        <div className="inner">
          <form
            method="post"
            name="contact"
            netlify
            netlify-honeypot="bot"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field__hidden">
              <label htmlFor="bot">Do not fill</label>
              <input name="bot" id="bot" />
            </div>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" required />
            </div>
            <div className="field">
              <label htmlFor="email">Project address / Postcode</label>
              <input type="text" name="postcode" id="postcode" required />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                rows="6"
                required
              ></textarea>
            </div>
            <div className="submit">
              <button type="submit" className="contact__button">
                <span>Send</span>
              </button>
            </div>
          </form>
        </div>
        <div className="contact-subheading">
          <h3>
            Do you have an enquiry for us or do you simply want to get in touch?
          </h3>
          <h3>Send us a message!</h3>
        </div>
      </div>
    </div>
  )
}

export default Contact
