packageJson = require('./package.json')

module.exports = {
  __experimentalThemes: [
    {
      options: {},
      resolve: `gatsby-theme-wheelroom`,
    },
  ],
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    {
      options: {},
      resolve: `gatsby-plugin-emotion`,
    },
    {
      options: {
        google: {
          families: ['Work+Sans:300'],
        },
      },
      resolve: 'gatsby-plugin-web-font-loader',
    },
  ],
  siteMetadata: {
    siteVersion: packageJson.version,
  },
}
