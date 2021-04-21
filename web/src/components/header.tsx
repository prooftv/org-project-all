import * as React from "react"
import PropTypes from "prop-types"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <h1 className={`brand`}>Mid</h1>
      <h1 className={`brand`}>Wales</h1>
      <h1>Arts</h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
