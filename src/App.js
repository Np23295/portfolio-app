import { useState } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [selectedNav, setSelectedNav] = useState({
    'title': 'About Me',
    'path': ''
});

  return (
    <div className="App">
      <header className="App-header">
        <Header selectedNav={selectedNav} setSelectedNav={setSelectedNav}></Header>
      </header>
      <section>
        {selectedNav.title === 'About Me' && <AboutMe/>}
        {selectedNav.title === 'Portfolio' && <Portfolio/>}
        {selectedNav.title === 'Resume' && <Resume/>}
        {selectedNav.title === 'Contact' && <Contact/>}
      </section>
      <footer>

      </footer>
    </div>
  );
}

export default App;
