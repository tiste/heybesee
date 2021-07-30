module.exports = {
  siteMetadata: {
    title: "Hey Be See",
    description:
      "Avec un grossier manque de prose, Hey Be See n'a pas de description. Par contre, ils font du rock, et ils le font bien.",
    siteUrl: "https://heybesee.fr",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Hey Be See",
        short_name: "Hey Be See",
        start_url: "/",
        background_color: "#1d1d1d",
        theme_color: "#1d1d1d",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
