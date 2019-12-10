import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from "gatsby-image"
import Layout from '../components/layout'
import SEO from "../components/seo"
import categoryCSS from "./Category.module.css"

const ProjectCategoryTemplate = ({ data }) => (
			<Layout>
            <SEO title={`Project Category: ${data.wordpressCategory.name}`} keywords={[`gatsby`, `application`, `react`]} />
				<header className="page-header">
					<h1 className="page-title">
						Project Category: <span className="page-description">{data.wordpressCategory.name}</span>
					</h1>
				</header>
                <ul className={categoryCSS.postList}>
                {data.allWordpressWpProject.edges.map(post => (
                    <li className={categoryCSS.blogPost}>
                    <Link to={`/project/${post.node.slug}`} className={categoryCSS.imageLink} >
                      <Img sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} className={categoryCSS.postImage} />
                    </Link>
                      <div className={categoryCSS.postContent}>
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
export default ProjectCategoryTemplate;
export const query = graphql`
	query($id: Int!) {
        wordpressCategory(wordpress_id: { eq: $id }) {
            wordpress_id
            name
            slug
        }
        allWordpressWpProject(filter: {categories: {elemMatch: {wordpress_id: { eq: $id }}}}) {
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