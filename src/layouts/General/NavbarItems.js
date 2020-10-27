import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './../../context/auth'

const nItems1 = [
    {
        name: "Inicio",
        to: "/",
        liClassName: "nav-item",
        aClassName: "nav-link"
    },
    {
        name: "Iniciar sesión",
        to: "/login",
        liClassName: "nav-item",
        aClassName: "nav-link"
    }
]

const nItems2 = [
    {
        name: "Inicio",
        to: "/",
        liClassName: "nav-item",
        aClassName: "nav-link"
    },
    {
        name: "Profile",
        to: "#",
        liClassName: "nav-item dropdown",
        aClassName: "nav-link dropdown-toggle",
        id: "navbarDropdown",
        role: "button",
        dataToggle: "dropdown",
        ariaHaspopup: true,
        ariaExpanded: false,
        ariaLabelledby: "navbarDropdown",
        dClassName: "dropdown-menu dropdown-menu-right",
        profile: 1
    }
]

const nItemsDropdown1 = [
    {
        name: "Action",
        to: "/",
        dClassName: "dropdown-item"
    },
    {
        name: "Another action",
        to: "/",
        dClassName: "dropdown-item"
    },
    {
        divider: true,
        name: "Cerrar sesión",
        to: "/",
        dClassName: "dropdown-item",
        logout: 1
    }
]

const NavbarItems = () => {
    const { user, logout } = useContext(AuthContext)
 
    const menu1 = () => nItems1.map( (i, key) => {
        return (
            <li className={ i.liClassName } key={ key }>
                {
                    i.liClassName === "nav-item dropdown" ? (
                        <Link to={ i.to } className={ i.aClassName } id={ i.id } role={ i.role } data-toggle={ i.dataToggle }
                            aria-haspopup={ i.ariaHaspopup } aria-expanded={ i.ariaExpanded }
                        >
                            { i.name }
                        </Link>
                    ) : (
                        <Link to={ i.to } className={ i.aClassName }>
                            { i.name }
                        </Link>
                    )
                }{
                    i.liClassName === "nav-item dropdown" ? (
                        <div className={ i.dClassName } aria-labelledby={ i.ariaLabelledby }>
                            {
                                nItemsDropdown1.map( (i2, key2) => {
                                    return(
                                        <div key={ key2 }>
                                            {
                                                i2.divider === true ? (
                                                    <div className="dropdown-divider"></div>
                                                ) : (
                                                    <></>
                                                )
                                            }{
                                                (<Link to={ i2.to } className={ i2.dClassName }>{ i2.name }</Link>)
                                            }
                                        </div>
                                    )
                                })
                            }     
                        </div>
                    ) : (
                        <></>
                    )
                }
            </li>
        )
    })

    const menu2 = () => nItems2.map( (i, key) => {
        return (
            <li className={ i.liClassName } key={ key }>
                {
                    i.liClassName === "nav-item dropdown" ? (
                        <Link to={ i.to } className={ i.aClassName } id={ i.id } role={ i.role } data-toggle={ i.dataToggle }
                            aria-haspopup={ i.ariaHaspopup } aria-expanded={ i.ariaExpanded }
                        >
                            { i.profile === 1 ? user.username : i.name }
                        </Link>
                    ) : (
                        <Link to={ i.to } className={ i.aClassName }>
                            { i.profile === 1 ? user.username : i.name }
                        </Link>
                    )
                }{
                    i.liClassName === "nav-item dropdown" ? (
                        <div className={ i.dClassName } aria-labelledby={ i.ariaLabelledby }>
                            {
                                nItemsDropdown1.map( (i2, key2) => {
                                    return(
                                        <div key={ key2 }>
                                            {
                                                i2.divider === true ? (
                                                    <div className="dropdown-divider"></div>
                                                ) : (
                                                    <></>
                                                )
                                            }{
                                                i2.logout === 1 ? (
                                                    <Link to={ i2.to } className={ i2.dClassName } name="logout" onClick={logout}>{ i2.name }</Link>
                                                ) : (
                                                    <Link to={ i2.to } className={ i2.dClassName }>{ i2.name }</Link>
                                                )
                                            }
                                        </div>
                                    )
                                })
                            }     
                        </div>
                    ) : (
                        <></>
                    )
                }
            </li>
        )
    })
    
    return user ? menu2() : menu1()
}

export default NavbarItems