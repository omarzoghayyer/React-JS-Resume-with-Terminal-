import React from 'react';

import ProfileInfo from './profileInfo.js';
import Terminal from './terminal.js';
import Projects from './projects.js'


function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#terminal">Terminal</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>
      <div className="content">

        <section id="profile" style={{ minHeight: '100vh' }}>
          <ProfileInfo />
        </section>

        <section id="projects" style={{ minHeight: '100vh' }}>
          <Projects />
        </section>

        <section id="terminal" style={{ minHeight: '100vh' }}>
          <Terminal />
        </section>
        
      </div>
    </div>
  );
}

export default App;