import React from 'react';

function Nav(props) {

    const {
        navBar = [],
        currentlyDisplayed,
        setCurrentlyDisplayed
    } = props;

    return (
        <nav>
            <ul className='nav-flex'>
                {navBar.map((navBarLink) => (
                    <li key={navBarLink}>
                        <span
                            onClick={() => {
                                setCurrentlyDisplayed(navBarLink)
                            }}
                            className={`${currentlyDisplayed === navBarLink && 'clicked-link'} nav-link`}>
                            {navBarLink}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;