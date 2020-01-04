module.exports = {
  siteMetadata: {
    title: `Gatsby Simple Blog`,
    description: `This is a simple blog I developed to test using WordPress as a CMS with Gatsby.js`,
    author: `@theremotecreative`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-page-transitions',
      options: {
        transitionTime: 1000
      },
    },
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
        name: `gatsby-simple-blog`,
        short_name: `blog`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        // Source Website from subdomain
        baseUrl: "blog-cms.theremotecreative.com",
        protocol: "http",
        hostingWPCOM: false,
        // Using advanced custom fields
        useACF: true,
        acfOptionPageIds: [],
        verboseOutput: false,
        perPage: 100,
        // Replace source url with gatsby site url
        /*searchAndReplaceContentUrls: {
          sourceUrl: "http://blog-cms.theremotecreative.com",
          replacementUrl: "http://localhost:8000/",
        },*/
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/project", // <== Custom post slug
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/*/*/menus", // <== Menu api endpoint
          "**/*/*/menu-locations", // <== Menu api endpoint
        ],
        excludedRoutes: [],
        keepMediaSizes: false,
        normalizer: function({ entities }) {
          return entities
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
