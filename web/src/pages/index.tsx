import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Brand from "../components/brand.en"
import Intro from "../components/intro"

const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
    <div className="container">
      <div className="introduction">
        <Brand />
        <Intro />
      </div>
    </div>
  </Layout>
)

export default IndexPage