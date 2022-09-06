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


    return (<div className="d-flex collapse navbar-collapse" id="navbarText">

        {
            menuItems.map((menu, i) => (
                <a key={menu.title} className={`nav-link ${menu.title === selectedNav.title && 'active'}`}  onClick={($event) => handleActiveNav($event, menu)}>{menu.title}</a>
            ))
        }
    </div>
    );
}


export default Nav;