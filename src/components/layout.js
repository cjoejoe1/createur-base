
import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./header"
import Footer from "./footer"
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

        <div style={{ margin: `0 auto`, maxWidth: `var(--size-content)`, padding: `var(--size-gutter)`}} >
          <main>{children}</main>
        </div>

      <Footer/>
    </>
  )
}

export default Layout
