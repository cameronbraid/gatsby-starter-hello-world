const path = require("path")
module.exports.createPages = async function(api) {

  const { actions, graphql } = api
  const { createRedirect, createPage } = actions

  await createPage({
    path : "/foo",
    component : path.resolve(`./src/templates/Foo.jsx`),
  })

}
