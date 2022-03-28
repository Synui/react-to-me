import React from 'react';
import Nav from './Nav';

function Header(props) {

    const {
        navBar,
        currentlyDisplayed,
        setCurrentlyDisplayed
    } = props;

    return (
        <header>
            <h1>
                Jonathon Schoenholz
            </h1>
            <Nav
            navBar={navBar}
            currentlyDisplayed={currentlyDisplayed}
            setCurrentlyDisplayed={setCurrentlyDisplayed}
            ></Nav>
        </header>
    )
}

export default Header;