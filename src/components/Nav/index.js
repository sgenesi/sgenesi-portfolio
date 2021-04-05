import React from 'react';

function Nav() {

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        <span>About Me</span>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#projects">
                        <span>My Projects</span>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#contact">
                        <span>Contact</span>
                    </a>
                </li>
                <li className="mx-2">
                    <a href="#resume">
                        <span>Resume</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;

