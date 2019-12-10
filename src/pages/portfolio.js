import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pageCSS from "./pageCSS.module.css"

const PortfolioPage = ({ data }) => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <ul className={pageCSS.postList}>
      {data.allWordpressWpProject.edges.map(post => (
        <li className={pageCSS.blogPost}>
          <Link to={`/project/${post.node.slug}`} className={pageCSS.imageLink} >
            <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} className={pageCSS.postImage} />
          </Link>
            <div className={pageCSS.postContent}>
              <Link to={`/project/${post.node.slug}`} style={{ display: "flex", color: "black", textDecoration: "none" }} >
                <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} style={{ marginBottom: 0 }} />
              </Link>
              <p style={{ margin: 0, color: "grey" }}>
                Price: ${post.node.acf.project_price}
              </p>
              <div dangerouslySetInnerHTML={{ __html: post.node.acf.short_description }} />
            </div>
        </li>
      ))}
    </ul>
  </Layout>
)

export default PortfolioPage

export const query = graphql`
  query {
    allWordpressWpProject {
      edges {
        node {
          title
          slug
          acf {
            project_price
            short_description
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
    }
  }
`