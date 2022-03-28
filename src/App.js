import React, { useState } from 'react';
import Pages from './components/Pages'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  const [navBar] = useState([
    'About Me',
    'Projects',
    'Resume',
    'Contact'
  ]);

  const [currentlyDisplayed, setCurrentlyDisplayed] = useState(navBar[0]);

  return (
    <div>
      <Header
        navBar={navBar}
        currentlyDisplayed={currentlyDisplayed}
        setCurrentlyDisplayed={setCurrentlyDisplayed}
      ></Header>

      <Pages
        currentlyDisplayed={currentlyDisplayed}
      ></Pages>
      <Footer></Footer>
    </div>
  );
}

export default App;
