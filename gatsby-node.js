exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allContentfulCities {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.allContentfulCities.edges.forEach(page => {
    actions.createPage({
      path: `/locations/${page.node.slug}`,
      component: require.resolve(`./src/templates/city-page.js`),
      context: { 
        slug: page.node.slug,
      }
    })
  })
}