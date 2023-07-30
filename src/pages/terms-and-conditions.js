import * as React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Terms = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>
          <div className="policy-outer">
            <h1>Terms & Conditions</h1>
            <h2>Terms</h2>
            <p>
              By accessing this Website, accessible from
              https://www.shootime.co.uk/, you are agreeing to be bound by these
              Website Terms and Conditions of Use and agree that you are
              responsible for the agreement with any applicable local laws. If
              you disagree with any of these terms, you are prohibited from
              accessing this site. The materials contained in this Website are
              protected by copyright and trade mark law.
            </p>
            <h2>Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the
              materials on Shootime Website for personal, non-commercial
              transitory viewing only. This is the grant of a license, not a
              transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose or for any public
                display;
              </li>
              <li>
                attempt to reverse engineer any software contained on Shootime
                Website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transferring the materials to another person or “mirror” the
                materials on any other server.
              </li>
            </ul>
            <p>
              This will let Shootimne to terminate upon violations of any of
              these restrictions. Upon termination, your viewing right will also
              be terminated and you should destroy any downloaded materials in
              your possession whether it is printed or electronic format.
            </p>
            <h2>Disclaimer</h2>
            <p>
              All the materials on Virtual Tour Company’s Website are provided
              “as is”. Shootime makes no warranties, may it be expressed or
              implied, therefore negates all other warranties. Furthermore,
              Shootime does not make any representations concerning the accuracy
              or reliability of the use of the materials on its Website or
              otherwise relating to such materials or any sites linked to this
              Website.
            </p>
            <h2>Limitations</h2>
            <p>
              Shootime or its suppliers will not be hold accountable for any
              damages that will arise with the use or inability to use the
              materials on Shootime’s Website, even if Shootime or an authorize
              representative of this Website has been notified, orally or
              written, of the possibility of such damage. Some jurisdiction does
              not allow limitations on implied warranties or limitations of
              liability for incidental damages, these limitations may not apply
              to you.
            </p>
            <h2>Revisions and Errata</h2>
            <p>
              The materials appearing on Shootime’s Website may include
              technical, typographical, or photographic errors. Shootime will
              not promise that any of the materials in this Website are
              accurate, complete, or current. Shootime may change the materials
              contained on its Website at any time without notice. Shootime does
              not make any commitment to update the materials.
            </p>
            <h2>Links</h2>
            <p>
              Shootime has not reviewed all of the sites linked to its Website
              and is not responsible for the contents of any such linked site.
              The presence of any link does not imply endorsement by Shootime of
              the site. The use of any linked website is at the user’s own risk.
            </p>
            <h2>Site Terms of Use Modifications</h2>
            <p>
              Shootime may revise these Terms of Use for its Website at any time
              without prior notice. By using this Website, you are agreeing to
              be bound by the current version of these Terms and Conditions of
              Use.
            </p>
            <h2>Your Privacy</h2>
            <p>
              Please read our <a href="/privacy">Privacy Policy</a>.
            </p>
            <h2>Governing Law</h2>
            <p>
              Any claim related to Shootime’s Website shall be governed by the
              laws of GB without regards to its conflict of law provisions.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Terms
