import React from "react";
import Github from '../../assets/logos/github-logo.png';
import Linkedin from '../../assets/logos/linkedin-logo.png';
import Instagram from '../../assets/logos/instagram-logo.png';

function Footer() {
    return (
        <footer className="footer">
            <div>
                <a
                    href="https://github.com/sgenesi"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={Github}
                        alt="Github"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/staci-genesi-013b0372/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={Linkedin}
                        alt="LinkedIn"
                        className="logo"
                    ></img>
                </a>
            </div>
            <div>
                <a
                    href="https://www.instagram.com/sc_genesi/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src={Instagram}
                        alt="Instagram"
                        className="logo"
                    ></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
