import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Headless CMS Gatsby Base Template</h1>
    <p>Welcome to your new Gatsby site. This site is a base template for building something amazing with Gatsby while using WordPress as a headless CMS </p>
    <p>This is Version 2.0. Delete this content to create a new home page</p>
    <p>This version contains the following features out of the box:</p>
    <ul>
      <li>Pulls and renders posts and pages from a wordpress site</li>
      <li>Pulls and renders a custom post type called "Project" which uses ACF fields</li>
      <li>Portfolio page displays custom post type loop</li>
      <li>Menu has links from API but hardcoded page links</li>
      <li>Categories are included in post and custom post type single posts</li>
      <li>Category archive template for posts and custom posts</li>
      <li>Includes a simple menu and mobile menu</li>
      <li>Includes a simple fade page transition</li>
      <li>Simple SEO meta fields</li>
      <li>404 page</li>
    </ul>
    <p>Ideas for future versions:</p>
    <ul>
      <li>Contact page with forms, icons, and google maps</li>
      <li>Animations with page scroll</li>
      <li>Author page and archive</li>
      <li>Pagination</li>
      <li>Isotope sorting on Portfolio page</li>
      <li>Search form in menu</li>
      <li>Submenus</li>
      <li>Recaptcha</li>
      <li>User authentication</li>
      <li>Mailchimp Email collection</li>
      <li>Sitemap</li>
      <li>Google Analytics</li>
      <li>A/B Testing</li>
      <li>PWA plugin</li>
    </ul>
  </Layout>
)

export default IndexPage
