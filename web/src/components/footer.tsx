import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "../scss/footer.scss"

const Footer = ({ siteTitle }) => (
  <footer>
    <div>
      
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer