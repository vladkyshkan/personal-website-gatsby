// exports.createPages = async ({ actions, graphql, reporter }) => {
//   const result = await graphql(`
//     {
//       allCasesJson {
//         edges {
//           node {
//             slug
//           }
//         }
//       }
//     }
//   `)

//   if (result.error) {
//     reporter.panic("There was a problem loading your projects!")
//     return
//   }

//   const cases = result.data.allCasesJson.edges

//   cases.forEach(({ node: { slug } }) => {
//     actions.createPage({
//       path: `/${slug}/`,
//       component: require.resolve("./src/templates/case.js"),
//       context: { slug },
//     })
//   })
// }
