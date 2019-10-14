module.exports = {
  siteMetadata: {
    title: "Vlad Kyshkan",
    description:
      "Digital designer, currently create the best e-commerce experience and make online shopping for customers easier and more comfortable at Omnicore",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/data/images`,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "project",
        path: "./src/data",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/data/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    "gatsby-transformer-json",
  ],
}
