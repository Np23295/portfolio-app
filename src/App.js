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
    <div className="text-center cover-container d-flex h-100 p-3 mx-auto flex-column">
      {/* Header */}
        <Header selectedNav={selectedNav} setSelectedNav={setSelectedNav}></Header>
      {/* Page content */}
      <main>
        {selectedNav.title === 'About Me' && <AboutMe />}
        {selectedNav.title === 'Portfolio' && <Portfolio />}
        {selectedNav.title === 'Resume' && <Resume />}
        {selectedNav.title === 'Contact' && <Contact />}
      </main>
      {/* Footer Content */}
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>Copyright <a href="#">@NimitPatel</a>.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
