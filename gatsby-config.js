module.exports = {
  siteMetadata: {
    title: "Gatsby Blog",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto Mono`],
        display: "swap",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-use-dark-mode",
  ],
};
