import * as React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Privacy = ({ children }) => {
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
            <h1>Shootime Ltd Privacy Policy</h1>
            <p>
              This privacy policy sets out how Shootime Ltd collects, uses,
              stores and protects any information that you give to us when you
              use the website at www.shootime.co.uk and any of our associated
              websites (“this website”).
            </p>
            <p>
              This website is hosted by Netlify and Namecheap and supported
              in-house by Shootime Ltd.
            </p>
            <p>
              We are committed to ensuring that your privacy is protected.
              Should we ask you to provide certain information from which you
              can be identified when using this website, then you can be assured
              that it will only be used in accordance with this privacy policy
              statement and with the requirements laid down by law in the Data
              Protection Act (DPA) 1998, The Privacy and Electronic
              Communications (EC Directive) Regulations (PECR) 2003 and the new
              General Data Protection Regulation (GDPR) 2018. Shootime Ltd is
              the data controller and responsible for your personal data (“we”
              “us” “our” in this privacy notice]. Our contact details are set
              out below.
            </p>
            <p>
              Shootime Ltd<br></br>
              86-90 Paul Street, London, EC2A 4NE<br></br>
              studio@shootime.co.uk
            </p>
            <p>
              We may change this policy from time to time by updating this page.
              You should check this page from time to time to ensure that you
              are happy with any changes. This policy is effective from 30 th
              July 2023.
            </p>
            <h2>What we collect</h2>
            <p>We may collect the following information:</p>
            <ul>
              <li>Your name and job title.</li>
              <li>
                Contact information including your email address, postal address
                and telephone number.
              </li>
              <li>
                Demographic information such as postcode, preferences and
                interests.
              </li>
              <li>We do not collect any special categories of data.</li>
            </ul>
            <p>
              It is important that the personal data we hold about you is
              accurate and current. Please keep us informed if your personal
              data changes during your relationship with us.
            </p>
            <h2>The legal basis for processing your data</h2>
            <p>
              We collect this data from you on at least one of the following
              legal bases:
            </p>
            <ul>
              <li>
                In the case of marketing to individuals/sole
                traders/partnerships, that you have provided your explicit
                opt-in consent for us to do so.
              </li>
              <li>
                In the case of contact information, that we need to in order to
                fulfil our contractual obligations to you (which includes the
                provision of quotations or estimates as a result of a request
                from you).
              </li>
              <li>
                In the case of your corporate email address (where you have
                provided us with this), that we have a legitimate interest in
                doing so for our own commercial marketing activities and
                activities related to customer satisfaction and product
                development and service improvement where our use of your data
                is proportionate, has a minimal impact on your privacy and is
                promotes an activity that you might reasonably expect us to be
                engaged in.
              </li>
            </ul>
            <h2>How is your data collected?</h2>
            <p>
              We use different methods to collect data from and about you,
              including through:
            </p>
            <ul>
              <li>
                Direct interactions with you when you fill in a form or
                correspond with us by post, phone, email or otherwise;
              </li>
              <li>
                Third parties for example where we have purchased a mailing
                list;
              </li>
              <li>
                Automated technologies or interactions, for example as you
                interact with this website we may automatically collect
                technical data about your equipment, browsing actions and
                patterns or by using cookies. Please see below for more
                information on how this website uses cookies.
              </li>
            </ul>
            <h2>What we do with the information we gather</h2>
            <p>
              We use, store and process this information to understand your
              needs and provide you with a better service, and in particular,
              for the following reasons:
            </p>
            <ul>
              <li>
                Internal record-keeping and to administer any account(s) that
                you might have with us.
              </li>
              <li>
                We may use the information for our legitimate business interests
                to improve our products and services to you.
              </li>
              <li>
                We may periodically send promotional emails about new products
                or services, special offers or other information which we think
                you may find interesting using the email address which you have
                provided and given us consent to use or, where you have provided
                us with a corporate email address, for our legitimate interests
                (as described above), provided you have not unsubscribed.
              </li>
            </ul>
            <p>
              From time to time, we may also use your information to contact you
              for our own market research and survey purposes. We may contact
              you by email, phone or post but only in accordance with your
              express and explicit consent for such contact. We may also use the
              information for our internal business purposes and legitimate
              interests of improving customer satisfaction to customise our
              website(s) according to your interests to provide you with a
              better experience.
            </p>
            <h2>How long do we keep your personal information for?</h2>
            <p>
              We will only retain your personal information for the minimum time
              that is necessary for the purpose for which it was collected. In
              relation to financial and transactional data this will be for a
              period of approximately 6 years after the date of the transaction.
            </p>
            <h2>Controlling your personal information – your rights</h2>
            <p>
              You may choose at any time to restrict the collection or use of
              your personal information in the following ways:
            </p>
            <ul>
              <li>
                Whenever you are asked to fill in a form on our website(s), look
                for the box or boxes that you can choose to tick to indicate
                that you agree or opt-in, so that the information can be used by
                us for direct marketing purposes – if you don’t agree then don’t
                tick.
              </li>
              <li>
                Right to withdraw consent, data retention and the right to be
                forgotten – If you have previously agreed to us using your
                personal information or we are using your contact details for
                our legitimate interests for direct-marketing purposes, you may
                change your mind at any time by writing to or emailing us at
                studio@shootime.co.uk. We will comply with your request within
                one month of receiving it. Please note, there may be certain
                circumstances such as a legal obligation we may have, that mean
                the right to be forgotten (your right to have your data erased)
                cannot be implemented but we will inform you of this should you
                contact us on this basis.
              </li>
              <li>
                Right of data portability – You have the right to request a copy
                of the data that you provided us with in order that you can
                reuse it for your own purposes across different services. This
                right is only applicable if you have given us explicit consent
                to process your data or if we have used it for the performance
                of any contract(s) we may have (had) with you. If you wish to do
                this, please write to or email us at studio@shootime.co.uk. We
                will provide the information in a commonly used and
                machine-readable format free of charge.
              </li>
              <li>
                Right of access to your data – You may request details of
                personal information which we hold about you. If you would like
                a copy of the information held on you please write to or email
                us at studio@shootime.co.uk. You will not need to pay a fee to
                access your personal data.
              </li>
              <li>
                Right to rectification of inaccurate data – If you believe that
                any information we are holding on you is incorrect or
                incomplete, please write to or email us at
                studio@shootime.co.uk as soon as possible. We will promptly
                rectify any information found to be incorrect.
              </li>
              <li>
                Right to object to processing of your data – You have a right to
                object to us using your data for marketing under the basis of
                ‘legitimate interests’ and if you wish to do so, please contact
                us at studio@shootime.co.uk.
              </li>
            </ul>
            <h2>Disclosures of your personal data</h2>
            <p>
              We will not sell, distribute or lease your personal information to
              third parties unless we have your permission or are required by
              law to do so. We will not use your personal information to send
              you promotional information about third parties.
            </p>
            <p>
              We may need to disclose your data to third parties to whom we may
              choose to sell, transfer, or merge parts of our business or our
              assets. Alternatively, we may seek to acquire other businesses or
              merge with them. If a change happens to our business, then the new
              owners may use your personal data in the same way as set out in
              this privacy notice.
            </p>
            <p>
              We require all third parties to respect the security of your
              personal data and to treat it in accordance with the law. We do
              not allow our third-party service providers to use your personal
              data for their own purposes and only permit them to process your
              personal data for specified purposes and in accordance with our
              instructions.
            </p>
            <h2>International Transfers</h2>
            <p>
              We do not transfer or give access to your personal data outside
              the European Economic Area.
            </p>
            <h2>Security</h2>
            <p>
              We are committed to ensuring that your information is secure. To
              prevent unauthorised access or disclosure, we have put in place
              appropriate physical, electronic and managerial procedures to
              safeguard and secure the information we collect online. All your
              information is stored either electronically on our secure servers
              only accessible by us or our staff or those nominated by the Data
              Controller as Data Processors. We limit access to your personal
              data to those employees and other third parties who have a
              business need to know. They will only process your personal data
              on our instructions and they are subject to a duty of
              confidentiality.
            </p>
            <p>
              In the event of any data security breach, we will comply with our
              legal responsibilities to notify the applicable regulator and you
              as outlined in the applicable legislation. Any password(s) which
              you might use to access our website or other platforms that are
              operated by us using third-party providers are your own
              responsibility and you undertake not to share them with anyone
              else, save as to making provisions in your will. If you believe
              your password(s) has/have been compromised, you must inform us
              straightaway and change it.
            </p>
            <h2>Complaints</h2>
            <p>
              If you have reason to make a complaint, then you should contact us
              in writing as soon as possible at studio@shootime.co.uk.
            </p>
            <h2>How we use cookies on our website</h2>
            <p>
              A cookie is a small text file which asks permission to be placed
              on your computer’s hard drive. Once you agree, the file is added
              and the cookie helps analyse web traffic or lets you know when you
              visit a particular site. Cookies allow web applications to respond
              to you as an individual. The web application can tailor its
              operations to your needs, likes and dislikes by gathering and
              remembering information about your preferences. You can read our
              full Cookies policy <a href="/cookies">here</a>.
            </p>
            <h2>Links to other websites</h2>
            <p>
              Our website(s) may contain links to other websites of interest.
              However, once you have used these links to leave this website, you
              should be aware that we do not have any control over those other
              websites. Therefore, we cannot be responsible for the protection
              and privacy of any information which you provide whilst visiting
              such sites and such sites are not governed by this privacy
              statement. You should look at the privacy statement applicable to
              the website in question.
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Privacy
