import React from 'react';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper blue lighten-4">
                <a href="#!" className="brand-logo">{props.titulo}</a>
            </div>
        </nav>
    )
}

export default Header;

