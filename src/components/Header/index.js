import React from 'react';
import Nav from './Nav';
// import 'bootstrap/dist/css/bootstrap.min.css';

let Header = (props) => {
    const { selectedNav, setSelectedNav } = props;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Nav selectedNav={selectedNav} setSelectedNav={setSelectedNav}></Nav>
      </nav >
    );
}

export default Header;