import React from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import './index.scss'

const Faq = ({ content }) => {
  return (
    <>
      <div className={`faq-container`} id="about-and-faq">
        <div className={`faq-text`}>
          <h2>About & FAQ</h2>
          <div className="faq-accordion-container">
            {content?.slice(0, 2).map((faq, key) => (
              <Accordion key={key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${key}-content`}
                  id={`${key}-header`}
                  className="faq-accordion"
                >
                  <h3>{faq.question.toUpperCase()}</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{faq.answer}</p>
                  <ul>
                    {faq?.list?.map((li, key) => (
                      <li key={key}>{li}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <div className="faq-accordion-container">
            {content?.slice(2, 10).map((faq, key) => (
              <Accordion key={key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${key}-content`}
                  id={`${key}-header`}
                  className="faq-accordion"
                >
                  <h3>{faq.question.toUpperCase()}</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{faq.answer}</p>
                  <ul>
                    {faq?.list?.map((li, key) => (
                      <li key={key}>{li}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
          <div className="faq-accordion-container">
            {content?.slice(10, 18).map((faq, key) => (
              <Accordion key={key}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${key}-content`}
                  id={`${key}-header`}
                  className="faq-accordion"
                >
                  <h3>{faq.question.toUpperCase()}</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{faq.answer}</p>
                  <ul>
                    {faq?.list?.map((li, key) => (
                      <li key={key}>{li}</li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Faq
