// import image1 from './src/images/360 virtual tour.png'
// import image2 from './src/images/matterport.png'
// import image3 from './src/images/EPC.jpg'
/**
 * @type {import('gatsby').GatsbyConfig}
 */
const siteUrl = process.env.URL || `https://www.shootime.co.uk/`

module.exports = {
  siteMetadata: {
    title: `Shootime`,
    description: `London based company, Shootime Ltd is specialised in 360 photography, 3D digital twins and EPC.`,
    author: `Rolando Sorbelli`,
    siteUrl: `https://www.shootime.co.uk/`,
    keywords: `Shootime, Matterport, Matterport survey, Matterport service, Matterport scan, London Matterport, Kensington Matterport, Chelsea Matterport, Knightsbridge Matterport, Mayfair Matterport, UK Matterport, United Kingdom Matterport, digital twin, digital twins, London digital twin, Kensington digital twin, Chelsea digital twin, Knightsbridge digital twin, Mayfair digital twin, UK digital twin, United Kingdom digital twin, Virtual tour, Virtual tours, 360, 360 Virtual tour, 360 Virtual tours, Virtual tour service, London Virtual tour, Kensington Virtual tour, Chelsea Virtual tour, Knightsbridge Virtual tour, Mayfair Virtual tour, UK Virtual tour, United Kingdom Virtual tour, professional virtual tour, professional virtual tours, professional 360 scan, professional survey, professional matterport scan, professional photgraphy, Survey, Real estate, Real estates, real estate marketing, residential, residential real estate, commercial, commercial real estate, retail, travel, hospitality, homeowners, insurance, restoration, facilities management, manufacturing, public sector, government, photography, 3d photography, 3d scan, 3d model, construction, construction survey, construct, 360 photography, London, Kensington, Chelsea, Knightsbridge, Mayfair, UK, United Kingdom, AI, Artificial intelligence, 3d walkthrough, 360 walkthrough, reality capture, capture services, property capture, virtual reality, luxury properties, luxury property, high-end property, high-end properties, leica, leica scanner, leica BLK 360, matterport pro, matterport pro2, matterport pro3, energy performance certificate, London energy performance certificate, Kensington energy performance certificate, Chelsea energy performance certificate, Knightsbridge energy performance certificate, Mayfair energy performance certificate, UK energy performance certificate, United Kingdom energy performance certificate, domestic energy performance certificate, London domestic energy performance certificate, Kensington domestic energy performance certificate, Chelsea domestic energy performance certificate, Knightsbridge domestic energy performance certificate, Mayfair domestic energy performance certificate, UK domestic energy performance certificate, United Kingdom domestic energy performance certificate`,
  },

  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/shootime4.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,400&family=Piazzolla:wght@600&display=swap`,
          },
        ],
      },
    },
    'gatsby-plugin-postcss',
    `gatsby-plugin-material-ui`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.shootime.co.uk',
        sitemap: 'https://www.shootime.co.uk/sitemap-0.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `,
        resolveSiteUrl: () => siteUrl,
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: ['G-1VJPP89LH2'],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
  ],
}
