import * as React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Cookies = ({ children }) => {
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
            <h1>About cookies</h1>
            <p>
              Cookies are a kind of short-term memory for the web. They are
              stored in your browser and enable a site to ‘remember’ little bits
              of information between pages or visits.
            </p>
            <p>
              Cookies can be used by web servers to identify and track users as
              they navigate different pages on a website, and to identify users
              returning to a website. Cookies may be either “persistent” cookies
              or “session” cookies. A persistent cookie consists of a text file
              sent by a web server to a web browser, which will be stored by the
              browser and will remain valid until its set expiry date (unless
              deleted by the user before the expiry date). A session cookie, on
              the other hand, will expire at the end of the user session, when
              the web browser is closed.
            </p>
            <h2>Cookies on our website</h2>
            <p>
              The cookies used on this website include those which are strictly
              necessary cookies for access and navigation, cookies that track
              usage (performance cookies) and cookies used to allow you to log
              into our bookings section, if we have allowed you access.
            </p>
            <p>
              We may use the information we obtain from your use of our cookies
              for the following purposes:
            </p>
            <ul>
              <li>
                to recognise your computer when you visit our website and log
                into our bookings section.
              </li>
              <li>to track you as you navigate our website.</li>
              <li>to improve the website’s usability.</li>
              <li>
                to analyse the use of our website – such as how many people
                visit us each day (see Google Analytics section below).
              </li>
            </ul>
            <p>
              <strong>Third party cookies</strong>
            </p>
            <p>
              We work with the following company in maintaining and improving
              our website. A brief description of what they do is found below.
              We ensure that any company which works with us and collects
              personal data complies with strict GDPR data protection standards.
              If you have any more questions, please do contact us and we’ll be
              happy to help.
            </p>
            <h2>Google & Google Analytics</h2>
            <p>
              We use Google Analytics to better understand how our customers
              navigate to and through our website, how long customers spend
              visiting our content items and how often they return to visit our
              website. Google Analytics also helps us track the effectiveness of
              the money we spend on our digital marketing. Google’s GDPR
              compliant Privacy Policy, which contains information on cookies,
              can be found here (https://policies.google.com/). We have blocked
              Google Analytics from recording IP addresses. This means we do not
              collect any personal information through the use of cookies on
              this website and have removed any services (such as social media
              plugins) that do.
            </p>
            <h2>Blocking cookies</h2>
            <p>
              Most browsers allow you to refuse to accept cookies. For example:
            </p>
            <ul>
              <li>
                In Internet Explorer 11 you can refuse all cookies by clicking
                “Tools”, “Internet Options”, select the “Privacy” tab and,
                locate “Advanced” under Settings and choose if you want to
                allow, block or be promoted for first and third-party cookies.
              </li>
              <li>
                In Microsoft Edge click on the three dots icon in the top
                right-hand corner and select “Settings”. Locate “View advanced
                settings”. In the “Cookies” section you will find a drop- down
                menu where you can select “Block only third-party cookies” or
                “Block all cookies”. You will then have to re-start Microsoft
                Edge.
              </li>
              <li>
                In Firefox you can block all cookies by clicking “Tools”,
                “Options”, and un- checking “Accept cookies from sites” in the
                “Privacy” box.
              </li>
              <li>
                In Google Chrome you can adjust your cookie permissions by
                clicking on the three dots icon in the top right-hand corner of
                your browser screen, selecting “Settings” from near the bottom
                of the drop-down list, then clicking on “Advanced” near the
                bottom. This should open options. In the “Privacy” section,
                click “Content Settings” and disable cookies by selecting “Block
                site from setting any data”. Click “Done” to save your
                preferences.
              </li>
              <li>
                On Safari on Apple OS X click on the Safari menu, then
                “Preferences” then “Privacy”. Under “Accept Cookies” unselect
                the “Always allow” option.
              </li>
              <li>
                For Opera choose “Settings”, “Quick Preferences” and uncheck
                “Enable Cookies”.
              </li>
            </ul>
            <h2>Deleting cookies</h2>
            <p>You can also delete cookies already stored on your computer:</p>
            <ul>
              <li>
                In Internet Explorer 11 click on “Tools”, point to “Safety” and
                then select the “Delete browsing history”. Click on the “Cookies
                and website data” checkbox and then choose “Delete”.
              </li>
              <li>
                In Microsoft Edge click on the three dots icon in the top
                right-hand corner and select “Settings”. Under “Clear browsing
                data” select “Choose what to clear” and select the checkbox next
                to “Cookies and saved website data” then click on “Clear”. If
                you wish you can turn the “Always clear this when I close the
                browser” setting to “On”.
              </li>
              <li>
                To delete cookies from a particular website in Firefox, click on
                the three lines icon and choose “Options”. In the “Privacy &amp;
                Security” panel go to the “History” section and in the drop menu
                next to “Firefox will” choose “Use custom settings for history”.
                A cookies window will appear when you click “Show Cookies”. In
                the Search field type the name of the site whose cookies you
                want to remove. Select the cookies you wish to remove and click
                “Remove Selected”. Click “Close” to close the Cookies window and
                the “about:preferences” page. To delete all cookies, open the
                cookies window as above and click “Remove All Cookies”.
              </li>
              <li>
                In Google Chrome click on the three dots icon in the top
                right-hand corner, select “Settings” and find “Advanced” near
                the bottom. Under “Privacy and security” click on “Content
                settings”. Click on “Cookies” and Under “All cookies and site
                data” select “Remove All”. Confirm by clicking on “Clear all”.
              </li>
              <li>
                On Safari on Apple OS X click on the Safari menu, then select
                “Preferences” from the drop- down. Go to the “Privacy” tab.
                Click the “Remove All Website Data” button to remove all stored
                website data and click “Remove Now” to confirm. To remove stored
                data by individual site, click on the “Details” button and
                select the sites with the stored data you wish to remove. Click
                “Remove” and then “Done”.
              </li>
              <li>
                For Opera selecting “Settings”, “Preferences”, “Advanced” and
                then “Cookies” and checking the “Delete new cookies when exiting
                Opera” and closing Opera when you have finished browsing will
                ensure the cookie information is kept in the browser.
              </li>
            </ul>
            <p>
              Doing this may limit the usability of many websites. Please do not
              hesitate to get in touch with us using the contact details on our
              contact page if you have any questions or queries regarding how we
              use cookies or anything else on our website.
            </p>
            <h2>Questions</h2>
            <p>
              If you have any questions about our Policy or your own personal
              information, please send an email to studio@shootime.co.uk
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}

export default Cookies
