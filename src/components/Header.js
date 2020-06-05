import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#!" className="brand-logo">{props.titulo}</a>
            </div>
        </nav>
    )
}

export default Header;

