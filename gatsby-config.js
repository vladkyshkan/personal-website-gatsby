module.exports = {
  siteMetadata: {
    title: "Vlad Kyshkan",
    description:
      "Product designer, currently responsible for user experience at food delivery service Zakaz.ua",
    author: "Vlad Kyshkan",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/data/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-104680598-2",
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: "1659613",
        sv: "6",
      },
    },
  ],
}
