import React, { useRef, useEffect } from "react";

import ProfileInfo from "./profileInfo.js";
import Terminal from "./terminal.js";
import Projects from "./projects.js";
import Photo from "./photo.js";
import Summary from "./summary.js";
import Contact from "./contact.js";
import Recording from "./recording.js";

function App() {
  const aboutRef = useRef(null);

  useEffect(() => {
    // Focus on the About section when the component mounts
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#profile"className="highlighted">About</a>
            </li>
            <li>
              <a href="#projects"className="highlighted">Projects</a>
            </li>
            {/* <li>
              <a href="#terminal"className="highlighted">Terminal</a>
            </li> */}
            <li>
              <a href="#contact"className="highlighted">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="content">
        <div ref={aboutRef}>
          <ProfileInfo />
          <Photo />
          <Recording/>
          <Summary />
        </div>

        <section id="projects" style={{ minHeight: "50vh" }}>
          <Projects />
        </section>

        {/* <section id="terminal" style={{ minHeight: "50vh" }}>
          <Terminal />
        </section>
         */}
        <section id="contact" style={{ minHeight: "50vh" }}>
          <Contact />
        </section>
        
      </div>
    </div>
  );
}

export default App;
