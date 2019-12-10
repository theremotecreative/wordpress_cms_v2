import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/layout'
import SEO from "../components/seo"
import categoryCSS from "./Category.module.css"

const CategoryTemplate = ({ data }) => (
			<Layout>
            <SEO title={`Category: ${data.wordpressCategory.name}`} keywords={[`gatsby`, `application`, `react`]} />
				<header className="page-header">
					<h1 className="page-title">
						Category: <span className="page-description">{data.wordpressCategory.name}</span>
					</h1>
				</header>
                <ul className={categoryCSS.postList}>
                {data.allWordpressPost.edges.map(post => (
                    <li className={categoryCSS.blogPost}>
                    <Link to={`/post/${post.node.slug}`} className={categoryCSS.imageLink} >
                        <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} className={categoryCSS.postImage} />
                    </Link>
                    <div className={categoryCSS.postContent}>
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
export default CategoryTemplate;
export const query = graphql`
	query($id: Int!) {
        wordpressCategory(wordpress_id: { eq: $id }) {
            wordpress_id
            name
            slug
        }
        allWordpressPost(filter: {categories: {elemMatch: {wordpress_id: { eq: $id }}}}) {
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