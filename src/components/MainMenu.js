import { StaticQuery, graphql, Link } from "gatsby"
import React from "react"

const MainMenu = () => (
    <StaticQuery
      query={graphql`
        query {
          wordpressWpApiMenusMenusItems(name: { eq: "Primary" }) {
            items {
              title
              object_slug
            }
          }
        }
      `}
  
      render={data => (
        <ul className="mainMenu">
            {data.wordpressWpApiMenusMenusItems.items.map(item => (
            <li 
              key={item.object_slug} 
              style={{ margin: `0 10px` }} 
              className="mainMenuItem"
            >
                <Link 
                to={`/${item.object_slug}`}
                style={{ color: `white`, textDecoration: `none`, fontFamily: `sans-serif`, }} 
                >
                {item.title}
                </Link>
            </li>
            ))}
        </ul>
      )}
    />
  )
  export default MainMenu