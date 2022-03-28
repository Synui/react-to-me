import React from 'react';
import About from './About';
import Projects from './Projects';
import Resume from './Resume';
// import Contact from './Contact';

function Pages(props) {

    const { currentlyDisplayed } = props;

    if (currentlyDisplayed === 'About Me') {
        return <main><About></About></main>
    } else if (currentlyDisplayed === 'Projects') {
        return <main><Projects></Projects></main>
    } else if (currentlyDisplayed === 'Resume') {
        return <main><Resume></Resume></main>
    // } else {
    //     return <main><Contact></Contact></main>
    }
}

export default Pages;