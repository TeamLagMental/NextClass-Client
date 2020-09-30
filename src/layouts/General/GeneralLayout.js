import React from "react"
import PropTypes from "prop-types";
import { Navbar } from './../../components'
import NavbarItems from './NavbarItems'

const MainFooter = () => {
    return( <div>Soy un footer </div> )
}

const GeneralLayout = ({ children, noNavbar, noFooter }) => (
    <div id="page-content-wrapper">
        {!noNavbar && <Navbar activeNav={false} items={ NavbarItems } />}
        {children}
        {!noFooter && <MainFooter />}
    </div>
)

GeneralLayout.propTypes = {
    noNavbar: PropTypes.bool,
    noFooter: PropTypes.bool
}

GeneralLayout.defaultProps = {
    noNavbar: false,
    noFooter: false
}

export default GeneralLayout