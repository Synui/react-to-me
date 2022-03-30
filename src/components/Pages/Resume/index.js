import React from 'react';
import resume from '../../../assets/resume/jonathon-schoenholz.pdf';

function Resume() {
    return (
        <div>
            <h2>Resume</h2>
            <div>
                <h4 className='skills'>Skills I've learned:</h4>
                <ul className='skill'>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>API's</li>
                    <li>Jest</li>
                    <li>Bootstrap</li>
                    <li>JQuery</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>SQL</li>
                    <li>Sequelize</li>
                    <li>MVC</li>
                    <li>NoSQL</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                    <li>PWA's</li>
                    <li>React</li>
                    <li>GraphQL</li>
                </ul>
            </div>
                <h3 className='download-resume'>
                    <a href={resume} download='jonathon-schoenholz' className='resume-download-link'>Download Resume</a>
                </h3>
        </div>
    )
}

export default Resume;