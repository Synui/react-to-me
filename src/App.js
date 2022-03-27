import React, { useState } from 'react';
import About from './components/About';
// import Projects from './components/Projects';
// import Resume from './components/Resume';
// import Conact from './components/Contact';
import Header from './components/Header';
// import Footer from './components/Footer';
import './App.css';

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
      <Header>
        navBar={navBar}
        currentlyDisplayed={currentlyDisplayed}
        setCurrentDisplayed={setCurrentlyDisplayed}
      </Header>
      <main>
      <About></About>
      {/* <Projects></Projects>
      <Resume></Resume>
      <Conact></Conact> */}
      </main>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
