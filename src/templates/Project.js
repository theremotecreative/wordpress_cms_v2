import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
const ProjectTemplate = ({ data }) => (
  <Layout>
    <SEO title={data.wordpressWpProject.title} description={data.wordpressWpProject.acf.short_description} />
    <h1>{data.wordpressWpProject.title}</h1>
    <p>
      Price: ${data.wordpressWpProject.acf.project_price}
    </p>
    <p>
      Categories: 
      {data.wordpressWpProject.categories.map(category => (
          <Link to={`/project-category/${category.slug}`} style={{ padding: '0 0 0 10px' }}>
              {category.name}
          </Link>
       ))}
    </p>
    <Img sizes={data.wordpressWpProject.featured_media.localFile.childImageSharp.sizes} alt={data.wordpressWpProject.title} style={{ maxHeight: 450 }} />
    <div style={{ marginTop: 20 }} dangerouslySetInnerHTML={{ __html: data.wordpressWpProject.content }} />
  </Layout>
)
export default ProjectTemplate
export const query = graphql`
  query($id: Int!) {
    wordpressWpProject(wordpress_id: { eq: $id }) {
      title
      content
      acf {
        project_price
        short_description
      }
      categories {
        name
        slug
      }
      featured_media {
        localFile {
          childImageSharp {
            sizes(maxWidth: 1200) {
                ...GatsbyImageSharpSizes
              }
          }
        }
      }
    }
  }
`