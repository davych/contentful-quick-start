require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
});
console.log('process.env.CONTENTFUL_SPACE_ID', process.env.NODE_ENV);
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN
      }
    }
  ]
};
