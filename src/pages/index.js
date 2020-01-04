import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Headless CMS Gatsby Base Template</h1>
    <p>Welcome to my simple Gatsby blog. This site is a base template for building something amazing with Gatsby while using WordPress as a CMS </p>
    <p>This is Version 2.0.</p>
    <p>This version contains the following features out of the box:</p>
    <ul>
      <li>Creates posts and pages from a WordPress API</li>
      <li>Creates a custom post type called "Project" which uses ACF fields</li>
      <li>Portfolio page displays custom post type loop</li>
      <li>Categories are included in post and custom post type single posts</li>
      <li>Category archive template for posts and custom posts</li>
      <li>Includes a simple menu and mobile menu</li>
      <li>Includes a simple fade page transition</li>
      <li>Simple SEO meta fields</li>
      <li>404 page</li>
      <li>Offline accessibility</li>
    </ul>
  </Layout>
)

export default IndexPage
