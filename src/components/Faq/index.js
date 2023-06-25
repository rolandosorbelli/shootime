import React, { Fragment } from 'react'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import './index.scss'

const Faq = ({ content }) => {
  return (
    <>
      <div className={`faq-container`} id="section-4">
        <div className={`faq-text`}>
          <h2>About & FAQs</h2>
          {content?.map((faq, key) => (
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
    </>
  )
}

export default Faq
