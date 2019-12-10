/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const BlogPostTemplate = path.resolve("./src/templates/BlogPost.js")
  const ProjectTemplate = path.resolve("./src/templates/Project.js")
  const PageTemplate = path.resolve("./src/templates/Page.js")
  const CategoryTemplate = path.resolve("./src/templates/Category.js")
  const ProjectCategoryTemplate = path.resolve("./src/templates/ProjectCategory.js")
  const result = await graphql(`
    {
      allWordpressPost {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressWpProject {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            slug
            wordpress_id
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
    const BlogPosts = result.data.allWordpressPost.edges
        BlogPosts.forEach(post => {
          createPage({
                path: `/post/${post.node.slug}`,
                component: BlogPostTemplate,
                context: {
                id: post.node.wordpress_id,
                },
            })
        })
    const Pages = result.data.allWordpressPage.edges
        Pages.forEach(page => {
            createPage({
                path: `/${page.node.slug}`,
                component: PageTemplate,
                context: {
                id: page.node.wordpress_id,
                },
            })
        })
    const Projects = result.data.allWordpressWpProject.edges
        Projects.forEach(project => {
            createPage({
                path: `/project/${project.node.slug}`,
                component: ProjectTemplate,
                context: {
                id: project.node.wordpress_id,
                },
            })
        })
    const Categories = result.data.allWordpressCategory.edges
        Categories.forEach(category => {
            createPage({
                path: `/category/${category.node.slug}`,
                component: CategoryTemplate,
                context: {
                id: category.node.wordpress_id,
                },
            })
        })
    const ProjectCategories = result.data.allWordpressCategory.edges
        ProjectCategories.forEach(projectCategory => {
            createPage({
                path: `/project-category/${projectCategory.node.slug}`,
                component: ProjectCategoryTemplate,
                context: {
                id: projectCategory.node.wordpress_id,
                },
            })
        })
}