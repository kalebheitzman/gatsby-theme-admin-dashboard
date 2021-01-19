// load environment vars
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// libs
const path = require("path")

module.exports = {
  /**
   * Site Metadata
   */
  siteMetadata: {
    title: process.env.GATSBY_SITE_TITLE,
    siteUrl: process.env.GATSBY_SITE_URL,
    description: process.env.GATSBY_SITE_DESCRIPTION
  },
  plugins: [
    /**
     * Page Creator
     */
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.join(__dirname, "src/pages"),
      },
    },
    /**
     * Content Sourcing
     */
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    /**
     * Typography and Styling
     */
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: path.join(__dirname, `src/utils/typography`),
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    /**
     * Image Processing
     */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    /**
     * SEO
     */
    `gatsby-plugin-react-helmet-async`
  ],
}