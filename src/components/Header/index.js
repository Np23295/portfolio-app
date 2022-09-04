import React from 'react';
import Nav from './Nav';
// import 'bootstrap/dist/css/bootstrap.min.css';

let Header = (props) => {
    const { selectedNav, setSelectedNav } = props;
    return (
        <header className="masthead mb-auto">
        <div className="inner">
          <h3 className="masthead-brand">Nimit Patel</h3>
          <nav className="nav nav-masthead justify-content-center">
            <Nav selectedNav={selectedNav} setSelectedNav={setSelectedNav}></Nav>
            </nav >
        </div>
        </header>
    );
}

export default Header;