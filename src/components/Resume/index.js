import React from "react";
import Image from 'react-bootstrap/Image';
import Front from '../../assets/images/resume1.png';
import Page from '../../assets/images/resume2.png';


function Resume() {
    return (
        <section>
            <div className="center">
                <h1 className="page-header">My Resume</h1>
            </div>
            <div>
                <Image src={Front} fluid />
            </div>
            <div>
                <Image src={Page} fluid />
            </div>
        </section>
    );
}

export default Resume;