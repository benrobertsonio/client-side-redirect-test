

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect } = actions
  createRedirect({ fromPath: '/na-some-page', toPath: '/some-page' })
  // Create pages here
}