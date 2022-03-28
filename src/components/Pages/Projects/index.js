import React, { useState } from 'react';

function Projects() {
    const [displayedProjects] = useState([
        {
            title: 'Playing Without Arpanet',
            website: 'https://playing-without-arpanet.herokuapp.com/',
            repository: 'https://github.com/Synui/playing-without-arpanet',
            projectImage: 'pwa-chart'
        },
        {
            title: 'Haphazardly Generated',
            website: 'https://synui.github.io/haphazardly-generated/',
            repository: 'https://github.com/Synui/haphazardly-generated',
            projectImage: 'haphazardly-image'
        },
        {
            title: 'Playing Without Arpanet',
            website: 'https://synui.github.io/forecast-frenzy/',
            repository: 'https://github.com/Synui/forecast-frenzy',
            projectImage: 'ff-image'
        },
        {
            title: 'Playing Without Arpanet',
            website: 'https://model-vs-tech.herokuapp.com/',
            repository: 'hhttps://github.com/Synui/model-vs-tech',
            projectImage: 'model-vs-tech-image'
        },
    ])
    return (
        <div>
            <h2>Projects</h2>
            <div className='projects'>
                {displayedProjects.map((project) => (
                    <div className='project-card' key={project.title}>
                        <div className='title-card'>
                            <h3>{project.title}</h3>
                            <p className='project-links'>
                                <a className='link' href={project.website} target='_blank' rel="noreferrer">
                                    <img className='link-icon' src={require('../../../assets/icons/pink-internet-icon.png')} alt='Website Icon' 
                                        width='50'
                                        height='50'/>
                                </a>
                                <a className='link' href={project.repository} target='_blank' rel="noreferrer">
                                    <img className='link-icon' src={require('../../../assets/icons/pink-github-icon.png')} alt='Github Icon'
                                    width='50'
                                    height='50'/>
                                </a>
                            </p>
                        </div>
                        <div className='project-image-card'>
                            <img className='project-image' src={require(`../../../assets/project-images/${project.projectImage}.png`)} alt={project.title} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;