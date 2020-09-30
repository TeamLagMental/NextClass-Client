import React from 'react'
import { NavLink } from 'react-router-dom'

const sItems = [
    {
        name: "Dashboard",
        to: "/dashboard",
        className: "list-group-item list-group-item-action bg-secondary text-light",
    },
    {
        name: "Login",
        to: "/login",
        className: "list-group-item list-group-item-action bg-secondary text-light",
    },
    {
        name: "Help",
        to: "/help",
        className: "list-group-item list-group-item-action bg-secondary text-light",
    },
    {
        name: "Home",
        to: "/",
        className: "list-group-item list-group-item-action bg-secondary text-light",
    }
]

const SidebarItems = () => {
    return (
        <>
        { sItems.map( (i, key) => {
            return (
                <NavLink to={ i.to } exact key={ key } className={ i.className } activeClassName="active">
                    { i.name }
                </NavLink>
            )
        })}
        </>
    )
}

export default SidebarItems