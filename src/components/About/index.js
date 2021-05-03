import React from 'react';

function About() {
    return (
        <section>
            <div className="center" id="about">
                <h1 className="page-header">A Little Bit About Me</h1>
            </div>
            <div className="center">
                <img
                    src={require('../../assets/images/cover.png')}
                    alt="about-me"
                    className="photo"
                />
            </div>
            <div>
                <p>
                    My name is Staci Genesi and I am a newly minted web developer in the Salt Lake City,
                    Utah area. I am starting my web development career a little late in life after spending
                    10 years teaching kindergarten. I pride myself on being a creative person. I have
                    excellent organization and planning skills, and I work very well with a mulitude of
                    personalities.
				</p>
                <p>
                    You may be wondering why I left teaching to become a web developer. Well, to be honest,
                    the answer is kind of simple: COVID-19. Teaching changed drastically for me when I went
                    from a classroom teacher to an online teacher overnight. In my pursuit to offer the best
                    education I could to kindergartners online I engaged in some professional development
                    classes. One of these classes was on the basics of HTML code. I took what I learned in
                    this class and was able to change my basic district Canvas page into a more kid friendly
                    and engaging site. I was opened up to a world I never knew I could enjoy or see myself
                    pursuing. I spent some time researching and discovered that there was so much more to
                    learn and decided to take the plunge and jump in. I am so excited to start this new
                    career and see where it can take me.
				</p>
            </div>
        </section>
    );
}

export default About;