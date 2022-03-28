import React from 'react';
import profilePic from '../../../assets/profile-image/profile-pic.jpg';

function About() {
    return (
        <section>
            <h2>About Me</h2>
                <img className='profile-pic' src={profilePic} alt='Profile Pic by Makowka Picrew' />
            <p>
                Hello my name is Jonathon Michael Schoenholz and I am an up-and-coming full-stack developer. 
                I tend to lean more towards the back-end side of things but can easy deal with any front-end needs.
            </p>
            <p>
                I'm big about singing and music in general and hope to one day branch into learning instruments to broaden my musical skills.
                Like a good portion of nerdy people I do enjoy video games which is actually my goal in my developer journey.
            </p>
            <p>
                Aside from gaming and music I love playing with my rabbits, Saia and Houston, and enjoying hanging out with my boyfriend.
            </p>
        </section>
    );
}

export default About;