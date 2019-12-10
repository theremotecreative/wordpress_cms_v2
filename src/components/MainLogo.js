import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const MainLogo = () => (
    <StaticQuery
      query={graphql`
        query {
          wordpressSiteMetadata {
            name
          }
        }
      `}
  
      render={data => (
        <h1 className="mainLogo">
            <Link 
            to="/"
            style={{ color: `white`, textDecoration: `none`, }} 
            >
                {data.wordpressSiteMetadata.name}
            </Link>
        </h1>
      )}
    />
  )
  export default MainLogo