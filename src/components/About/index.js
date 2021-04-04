import React from 'react';
import coverImage from "../../assets/cover/staci-genesi-b&w.jpeg"

function About() {
    return (
        <section className="my-5">
            <h1 id="about">A Little Bit 'Bout Me</h1>
            <div>
                <img src={coverImage} className="my-2" alt="cover" />
            </div>
            <div>
                <p> My name is Staci Genesi and I am a newly minted web developer in the Salt Lake City, Utah area. I am starting my web development career a little late in life after spending 10 years teaching kindergarten. I pride myself on being a creative person. I pride myself on being a creative person who has excellent organization and planning skills, and works well with a mulitude of personalities.</p>
                <br></br>
                <p>You may be wondering why I left teaching to become a web developer. Well, to be honest, the answer is kind of simple: COVID-19. Teaching changed drastically for me when I went from a classroom teacher to an online teacher overnight. In my pursuit to offer the best
            education I could to kindergartners online I engaged in some professional development classes. One of these classes was on the basics of HTML code. I took what I learned in this class and was able to change my basic district Canvas page into a more kid friendly and engaging site. I was opened up to a world I never knew I could enjoy or see myself pursuing. I spent some time researching and discovered that there was so much more to learn and decided to take the plunge and jump in. I am so excited to start this new career and see where it can take me.</p>
            </div>
        </section >
    );
}

export default About;