export default {
    stackbitVersion: "~0.6.0",
    filterModel({ models, userContext }) {
      // Filtering logic based on current user context ...
      return true
    },
    siteMapModel({ models, userContext }) {
      // Custom sitemap model ...
      return models
    },
    pageModel({ models, userContext }) {
      // Custom page model ...
      return models
    },
    siteMap ({ models, userContext }) {
      // Custom sitemap ...
      return [
        {
            url: '/page-1',
            changefreq: 'daily',
            priority: 0.7
            },
            {
            url: '/page-2',
            changefreq: 'daily',
            priority: 0.7
        }
      ]
    }
  }