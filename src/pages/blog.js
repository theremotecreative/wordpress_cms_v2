import React from "react"
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pageCSS from "./pageCSS.module.css"

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul className={pageCSS.postList}>
      {data.allWordpressPost.edges.map(post => (
        <li className={pageCSS.blogPost}>
          <Link to={`/post/${post.node.slug}`} className={pageCSS.imageLink} >
            <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} className={pageCSS.postImage} />
          </Link>
          <div className={pageCSS.postContent}>
            <Link to={`/post/${post.node.slug}`} style={{ color: "black", textDecoration: "none" }} >
              <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} style={{ marginBottom: 0 }} />
            </Link>
            <p style={{ margin: 0, color: "grey" }}>
              Written by {post.node.author.name} on {post.node.date}
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
          </div>
        </li>
      ))}
    </ul>
  </Layout>
)

export default BlogPage

export const query = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
          author {
            name
          }
          date(formatString: "MMMM DD, YYYY")
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