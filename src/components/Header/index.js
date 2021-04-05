import React from 'react';
import Nav from '../Nav';

function Header() {

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="heart">💜</span> Staci Genesi
                </a>
            </h2>
            <Nav></Nav>
        </header>
    );
}

export default Header;

