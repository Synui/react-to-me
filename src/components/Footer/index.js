import React, { useState } from 'react';
import githubIcon from '../../assets/icons/green-github-icon.png';
import linkedinIcon from '../../assets/icons/green-linkedin-icon.png';
import stackIcon from '../../assets/icons/stack-icon.png';

function Footer() {
    // holds all of my personal linksod
    const [footerLinks] = useState([
        {
            name: 'github',
            url: 'https://github.com/Synui',
            alt: 'GitHub icon',
            icon: githubIcon
        },
        {
            name: 'linked-in',
            url: 'https://www.linkedin.com/in/jonathon-schoenholz-5830209a/',
            alt: 'LinkedIn icon',
            icon: linkedinIcon
        },
        {
            name: 'stack',
            url: 'https://stackoverflow.com/users/17195308/jonathon-schoenholz',
            alt: 'Stack Overflow icon',
            icon: stackIcon
        }
    ]); 

    return (
        <footer>
            <p>Jonathon Schoenholz © 2022</p>
            <ul className="footer-links">
                {footerLinks.map((link) => (
                    <li className="footer-link" key={link.name}>
                        <a href={link.url} target="_blank" rel="noreferrer">
                            <img
                                alt={link.alt} 
                                className="footer-icons"
                                src={link.icon}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </footer>
    )
}

export default Footer;