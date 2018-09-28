const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const episodeTemplate = path.resolve('src/templates/episode.js')

    resolve(
      graphql(`
        {
          allContentfulEpisode(limit: 100) {
            edges {
              node {
                id
                slug
                episodeNumber
              }
            }
          }
        }
      `).then(result => {
        if (result.erros) {
          reject(result.erros)
        }

        result.data.allContentfulEpisode.edges.forEach(edge => {
          createPage({
            path: edge.node.slug,
            component: episodeTemplate,
            context: {
              episodeNumber: edge.node.episodeNumber,
            },
          })
        })
        return
      })
    )
  })
}