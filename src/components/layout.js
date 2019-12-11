/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions'
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built by
          {` `}
          <a href="https://theremotecreative.com" target="_blank">The Remote Creative</a>
          {` `}
          with
          {` `}
          <a href="https://www.gatsbyjs.org" target="_blank">Gatsby</a>
          {` `}
          and
          {` `}
          <a href="https://www.wordpress.org" target="_blank">WordPress</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
