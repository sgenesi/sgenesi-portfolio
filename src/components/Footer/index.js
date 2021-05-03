import React from 'react';
// import '../App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return <div className='icons-list'>
        <a
            className="faLinkedin app-link social-media-list"
            href="https://www.linkedin.com/in/staci-genesi-013b0372/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
            className="faGithub app-link social-media-list"
            href="https://github.com/sgenesi"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
            className="faInstagram app-link social-media-list"
            href="https://www.instagram.com/sc_genesi/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
    </div>
}
export default Footer;