import React from 'react';
import coverImage from "../../assets/cover/staci-genesi-b&w.jpeg"

function About() {
    return (
        <section className="my-5">
            <hi id="about">A Little Bit 'Bout Me</hi>
            <img src={coverImage} classname="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    );
}

export default About;