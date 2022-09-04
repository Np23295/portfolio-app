import React, { useCallback } from 'react';


let Nav = (props) => {
    const { selectedNav, setSelectedNav } = props;

let menuItems = [
    {
        'title': 'About Me',
        'path': ''
    },
    {
        'title': 'Portfolio',
        'path': ''
    },
    {
        'title': 'Resume',
        'path': ''
    },
    {
        'title': 'Contact',
        'path': ''
    },

]
     const handleActiveNav = (e, menuItem) => {
        e.preventDefault();
        console.log("Clicked", menuItem, e);
        setSelectedNav(menuItem);
    
    }


    return (<div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
            {
                menuItems.map((menu, i) => (<li key={menu.title} className={`nav-item ${menu.title === menu.title && 'active'
            }`}>
                    <a className="nav-link" onClick={($event) => handleActiveNav($event, menu)}>{menu.title}</a>
                </li>))
            }
        </ul>
    </div>
    );
}


export default Nav;