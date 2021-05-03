import React from "react";

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
                        src={require("../../assets/logos/github-logo.png")}
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
                        src={require("../../assets/logos/linkedin-logo.png")}
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
                        src={require("../../assets/logos/instagram-logo.png")}
                        alt="Instagram"
                        className="logo"
                    ></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
