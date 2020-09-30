import React from 'react';

const Sidebar = (props) => {
    return(
        <div className="bg-secondary" id="sidebar-wrapper">
            <div className="sidebar-heading">
                <br/>
            </div>
            <div className="sidebar-heading text-light text-center">
                NextClass
            </div>
            <div className="list-group list-group-flush scrolleable">
                { props.items() }
            </div>
        </div>
    )
}

export default Sidebar