// libs
const path = require("path")

module.exports = {
  plugins: [
    /**
     * Themes
     */
    {
      resolve: "gatsby-theme-auth0",
      options: {
        domain: process.env.AUTH0_DOMAIN,
        clientID: process.env.AUTH0_CLIENT_ID,
        redirectUri: process.env.AUTH0_CALLBACK_URL,
        // audience: process.env.AUTH0_AUDIENCE, // Optional
        // responseType: process.env.AUTH0_RESPONSE_TYPE, // Optional
        // scope: process.env.AUTH0_SCOPE, // Optional
        // callbackPath: "/auth/callback", // Optional
      },
    },
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
        name: `elements`,
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
     * SEO
     */
    `gatsby-plugin-react-helmet-async`
  ],
}