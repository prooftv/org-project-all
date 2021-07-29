import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { SiteTitleQuery } from "../../generated/graphqlTypes"
import Header from "./header"
import Footer from "./footer"
import "../scss/layout.scss"

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery<SiteTitleQuery>(graphql`
    query SiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Centenery`} />
      <div>
        <main>{children}</main>
        <Footer siteTitle={data.site.siteMetadata?.title || `Centenery`} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout