import React from "react"
import TransitionLink from "gatsby-plugin-transition-link"

const FadeLink = ({ to, style, className, children }) => (
    <TransitionLink 
      to={to} 
      exit={{ 
        length: 0.5,
       }} 
      entry={{
        delay: 0.5,
        length: 0.5,
      }}
      style={style}
      className={className}>
      {children}
    </TransitionLink>
  )

  export default FadeLink