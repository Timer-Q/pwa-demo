import React from 'react'
import PropTypes from 'prop-types'
import history from '../routers/history'

import "../styles/header.scss";

function Header(props) {
  const handleBack = () => {
    history.goBack()
  }
  
  return (
    <header className="header">
        <span className="header-left" onClick={handleBack}>
          &lt;
        </span>
        <div>{props.name}</div>
      </header>
  )
}

Header.propTypes = {
  name: PropTypes.string
}

export default Header
