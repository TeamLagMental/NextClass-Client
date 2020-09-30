import React from 'react'

function Navbar(props){
    const openNavbar = () => {
        let dFlex = document.getElementById('wrapper')
      
        dFlex.className.includes("toggled") ?
            dFlex.classList.remove("toggled")
        :
            dFlex.classList.add("toggled")
    }

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-dark fixed-top">
            {
                props.activeNav ?
                (
                    <button className="btn btn-secondary" id="menu-toggle" onClick={ openNavbar }>
                        <i className="fas fa-align-justify"></i>
                    </button>
                ) : (
                    <></>
                )
            }
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    { props.items() }
                </ul>
            </div>
        </nav>
    )
}

export default Navbar