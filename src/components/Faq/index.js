import React, { Fragment } from 'react'

import './index.scss'

const Faq = ({ content }) => {
  console.log('FAQS', content)
  return (
    <div className={`faq-container`} id="section-4">
      <div className={`faq-text`}>
        <h2>About & FAQs</h2>
        {content?.map((faq, key) => (
          <Fragment key={key}>
            <h3>Q: {faq.question}</h3>
            <p>{faq.answer}</p>
            <ul>
              {faq?.list?.map((li, key) => (
                <li key={key}>{li}</li>
              ))}
            </ul>
          </Fragment>
        ))}
      </div>
    </div>
  )
}

export default Faq
