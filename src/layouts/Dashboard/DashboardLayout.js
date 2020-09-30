import React from "react"
import PropTypes from "prop-types"
import { Sidebar, Navbar } from './../../components'
import SidebarItems from './SidebarItems'
import NavbarItems from './../General/NavbarItems'

const MainFooter = () => {
  return( <div>Soy un footer</div> )
}

const DashboardLayout = ({ children, noSidebar, noNavbar, noFooter }) => (
  <div className="d-flex" id="wrapper">
    { !noSidebar && <Sidebar items={ SidebarItems } /> }
    <div id="page-content-wrapper">
        { !noNavbar && <Navbar activeNav={true} items={ NavbarItems } /> }
        <br/><br/>
        { children }
        { !noFooter && <MainFooter /> }
    </div>
  </div>
)

DashboardLayout.propTypes = {
  noSidebar: PropTypes.bool,
  noNavbar: PropTypes.bool,
  noFooter: PropTypes.bool
}

DashboardLayout.defaultProps = {
  noSidebar: false,
  noNavbar: false,
  noFooter: false
}

export default DashboardLayout