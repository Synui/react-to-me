import React, { useState } from 'react';

function Projects() {
    const [displayedProjects] = useState([
        {
            title: 'ASL Gaming',
            website: 'https://asl-gaming.herokuapp.com/',
            repository: 'https://github.com/Synui/asl-gaming',
            projectImage: 'README'
        },
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
            title: 'Forecast Frenzy',
            website: 'https://synui.github.io/forecast-frenzy/',
            repository: 'https://github.com/Synui/forecast-frenzy',
            projectImage: 'ff-image'
        },
        {
            title: 'Model vs Tech',
            website: 'https://model-vs-tech.herokuapp.com/',
            repository: 'https://github.com/Synui/model-vs-tech',
            projectImage: 'model-vs-tech-image'
        },
        {
            title: 'Baby Game',
            website: 'https://baby-shower-game.herokuapp.com/',
            repository: 'https://github.com/Synui/baby-game',
            projectImage: 'baby-shower-game'
        },
        {
            title: 'Coding Assessment',
            website: 'https://synui.github.io/coding-assessment/',
            repository: 'https://github.com/Synui/coding-assessment',
            projectImage: 'coding-assessment'
        }
    ])
    return (
        <div>
            <h2 className='project-title'>Projects</h2>
            <div className='projects'>
                {displayedProjects.map((project) => (
                    <div className='project-card' key={project.title}>
                        <div className='title-card'>
                            <h3>{project.title}</h3>
                            <p className='project-links'>
                                <a href={project.website} target='_blank' rel="noreferrer">
                                    <img className='link-icon' src={require('../../../assets/icons/green-internet-icon.png')} alt='Website Icon' 
                                        width='40'
                                        height='40'/>
                                </a>
                                <a href={project.repository} target='_blank' rel="noreferrer">
                                    <img className='link-icon' src={require('../../../assets/icons/green-github-icon.png')} alt='Github Icon'
                                    width='40'
                                    height='40'/>
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