import React, { useState, useEffect, useRef } from "react";

import MyImage from "./MyImage";
import professionalPicture from "./Images/oz.png";
import ProfileInfo from "./profileInfo";

import "./style/ProfilePictureAndName.css";
import "./style/ProfessionalSummaryStyle.css";
import "./style/App.css";
import "./style/Terminal.css";
import "./style/Resume.css";
import "./style/Instructions.css";

function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [path, setPath] = useState("c:\\user");
  const [catPosition, setCatPosition] = useState({ x: 50, y: 50 });
  const [catDirection, setCatDirection] = useState({ x: 1, y: 1 });

  function moveCat() {
    let nextX = catPosition.x + catDirection.x;
    let nextY = catPosition.y + catDirection.y;

    // Check if cat hits a horizontal wall
    if (nextX < 0 || nextX > 100) {
      setCatDirection({ ...catDirection, x: -catDirection.x });
      nextX = catPosition.x + catDirection.x;
    }

    // Check if cat hits a vertical wall
    if (nextY < 0 || nextY > 100) {
      setCatDirection({ ...catDirection, y: -catDirection.y });
      nextY = catPosition.y + catDirection.y;
    }

    setCatPosition({ x: nextX, y: nextY });
  }

  useEffect(() => {
    const intervalId = setInterval(moveCat, 20);

    return () => clearInterval(intervalId);
  }, []);

  function showProject() {
    return `
    <div class="terminal-window">
     <div class="terminal-prompt">
      <div class="Projects">
      <h3>PROJECTS</h3>
        <h4>Interpreter (Basic Compiler For a New Language) — Detail:</h4>
        <p> My friend and I worked on building and improving a compiler for the smpl programming language. We started with a preliminary project, creating an interpreter capable of parsing integer arithmetic expressions. We then expanded the interpreter's abilities to include interpreting variables and expressions containing letters. However, we still need to implement four more features, and have only completed the first two steps so far Tech Used: C++.</p>
        <h4>Command Line Resume Portfolio — Detail:</h4>
        <p>I developed this application by utalizing the React.js framework, a novel method has been devised for reviewing my portfolio through a user-friendly command line terminal. This approach offers a unique way of navigating through directories to locate specific information that users wish to view. Tech Used: React JS. </p>
      </div>
    `;
  }
  function showResume() {
    return `
    <div class="terminal-window">
     <div class="terminal-prompt">
      <div class="resume">
        <h2>Omar Zoghayyer</h2>
        <p>As an engineer with a keen interest in operating systems and automation, I enjoy contributing to open source projects related to operating system architecture in my free time. I am also committed to expanding my knowledge of lower-level programming languages to gain a deeper understanding of computer systems architecture and optimize software performance.</p>
        <p>Palo Alto, CA<br>
        415-980-9396<br>
        sfzoghayyer@gmail.com</p>
        <h3>EXPERIENCE</h3>
        <h4>Electronic Arts, Redwood City, CA— Quality Engineer/ Software Engineer</h4>
        <p>November 2021 - PRESENT</p>
        <ul>
          <li>Working on the next Battlefield HD Game.</li>
          <li>Utilized C++ to construct a fully scalable player equipment feature for Battlefield Mobile game, providing QA and developers with instantaneous access to the current list of available equipment.</li>  
          <li>Designed a C++ program that notifies Unreal Engine when designers/developers are using more than 90% of the total available UObjects.</li>
          <li>Enhanced the system that reports bugs and issues from devices in Slack by integrating the C++ Unreal Engine Bugit System.
          </li>
          <li>Conducted brief research on developing downloadable content (DLC) for mobile devices.
          </li>
          <li>Automate manual written test cases using Schematic and C++.
          </li>
          <li>Took end-to-end responsibility for three teams, including infrastructure, core technology tools, and performance.
          </li>
          <li>Assisted developers in automating a manual test, reducing manual effort by 50%.
          </li>
          <li>Proactively identified project feature risks, collaborating with development and design to establish mitigation strategies.
          </li>
          <li>Led three major Unreal Engine 4 upgrades, ensuring that they passed all functional and stress testing and were ready for Development.
          </li>
        </ul>
          <h4>Pro Unlimited @ Electronic Arts, Redwood City, CA— Quality Engineer</h4>
          <p>August 2020 - June 2021 </p>
          <ul>
            <li>Worked on the  Battlefield Mobile Game.</li>
            <li> I was responsible for evaluating and implementing testing methods for different aspects of the project. Collaborating with managers and team leaders, I aimed to enhance the quality of the development process. Additionally, I contributed to the automation of manual performance tests and partnered with developers to convert unprocessed data into comprehensible information through Power-Bi.
            </li>
          </ul>
          <h4>Zoox inc (Acquired by Amazon), Menlo Park, CA— Software QA Analyst</h4>
          <p>March 2019 - August 2020</p>
          <ul>
            <li>I troubleshooted and tested new features such as planner, prediction, and perception. I merged new branches for integration and release candidate tests. I helped establish and lead the planner driver algorithms team, triaged daily drive scenarios, assisted engineers from different departments, and trained new software specialists. </li>
          </ul>
          <h4> FightPandemics, Palo Alto, CA— Open Source Software Engineer    </h4>
          <p>March 2019 - August 2020</p>
          <ul>
            <li> I used react-hook-form library to validate email and password input fields for data quality, and helped develop UI feedback features using ant-design and styled-components. I have experience with modern technologies like React-Hook, styled-components, Ant-Design, Docker, and MongoDB. I worked closely with product managers and designers to build flexible and composable components, and collaborated with cross-functional teams to deliver high-quality work. </li>
          </ul>
          <h3>PROJECTS</h3>
          <h4>Interpreter (Basic Compiler For a New Language) — Detail:</h4>
          <p> My friend and I worked on building and improving a compiler for the smpl programming language. We started with a preliminary project, creating an interpreter capable of parsing integer arithmetic expressions. We then expanded the interpreter's abilities to include interpreting variables and expressions containing letters. However, we still need to implement four more features, and have only completed the first two steps so far Tech Used: C++.</p>
          <h4>Command Line Resume Portfolio — Detail:</h4>
          <p>I developed this application by utalizing the React.js framework, a novel method has been devised for reviewing my portfolio through a user-friendly command line terminal. This approach offers a unique way of navigating through directories to locate specific information that users wish to view. Tech Used: React JS. </p>

          <h3>EDUCATION</h3>
            <h4>San Francisco State University, San Francisco— Business Administration (Management)</h4>
            <p>January 2018- May 2019</p>

            <h4>City College Of San Francisco, San Francisco— Transfer Student For Business Administration</h4>
            <p>August 2015- December 2017</p>

            <h4>College Of San Mateo, San Mateo— Computer Science </h4>
            <p>January 2023- MAY 2023</p>

            <h3>SKILLS</h3>
            <ul>
              <li> 
                    C++
                    C
                    Automation
                    Unreal Engine 4
                    Frostbite
                    Blueprint
                    Git
                    ReactJS
                    Perforce
                    JIRA
                    Schematic
                    PowerPI
                    DataDog
                    Grafana
                    Jenkins
                    BigQuery [MySQL]
                </li>
            </ul>

            <h3>HOBBIES</h3>
            <ul>
              <li> 
                    Mobile Operating Systems
                    Chess
                    Astronomy & Space
                </li>
            </ul>
      </div>
    `;
  }

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const command = input.trim();
    if (command === "ls") {
      setOutput(
        output +
          `<div class="terminal-prompt"><span><i class="fas fa-folder"></i>&nbsp;${path}\\></span>
          </div>
          <div class="yellow-text" style="margin-top: -10px; margin-left: 10px;">--background --projects --resume --interest --cat</div>`
      );
    } else if (command === "clear") {
      setOutput("");
    } else if (command.startsWith("cd")) {
      const newPath = command.split(" ")[1];
      if (newPath === "..") {
        const pathParts = path.split("\\");
        pathParts.pop();
        setPath(pathParts.join("\\"));
      } else {
        setPath(path + "\\" + newPath);
      }
    } else if (command === "resume") {
      setOutput(
        output +
          `<div class="terminal-prompt"><span>${path}\\></span>Would you like to print the resume in the terminal or open a PDF? Type 'print' or 'pdf'</div>`
      );
    } else if (command === "print") {
      setOutput(output + "<div class='white-text'>" + showResume() + "</div>");
    } else if (command === "pdf") {
      window.open(
        "https://docs.google.com/document/d/11RYtznPfIiShgd5lti7pooI-ib49M6Elq16s5Eald-o/edit?usp=sharing"
      );
    } else if (command === "interest") {
      setOutput(
        output +
          `<div class="terminal-prompt"><span>${path}\\interest\\></span>Here are my interests:</div>` +
          "<div class='white-text'>As an engineer with a keen interest in operating systems and automation, I enjoy contributing to open source projects related to operating system architecture in my free time. I am also committed to expanding my knowledge of lower-level programming languages to gain a deeper understanding of computer systems architecture and optimize software performance.</div>"
      );
    } else if (command === "cat") {
      const cat = document.createElement("div");
      cat.classList.add("cat-icon");
      const catImage = document.createElement("img");
      catImage.src = "";
      cat.appendChild(catImage);
      const catText = document.createElement("div");
      catText.classList.add("cat-text");
      catText.textContent = "Hire Me";
      cat.appendChild(catText);
      document.querySelector(".terminal-body").appendChild(cat);
    } else if (command === "background") {
      setOutput(
        output +
          `<div class="terminal-prompt"><span>${path}\\background\\></span>Here is my background:</div>` +
          "<div class='white-text'>I hold a BS business degree with 5 years of experience in tech. My recent project is the one you are using now. The one before that is a simple compiler.</div>"
      );
    } else if (command === "projects") {
      setOutput(
        output +
          `<div class="terminal-prompt"><span>${path}\\></span>Do you want to view a GitHub account or print the project description in the terminal? Type 'here' or 'Open Github'</div>`
      );
    } else if (command === "here") {
      setOutput(output + "<div class='white-text'>" + showProject() + "</div>");
    } else if (command === "Open Github") {
      window.open("https://github.com/omarzoghayyer");
    } else if (command === "back") {
      const pathParts = path.split("\\");
      pathParts.pop();
      setPath(pathParts.join("\\"));
      setOutput("");
    } else if (command === "help") {
      setOutput(
        output +
          `<div class="terminal-prompt"><span>${path}\\></span>Here are the available commands:</div>` +
          "<div class='white-text'>ls - list available options<br>cd [directory] - change directory<br>resume - display my resume<br>interest - display my interests<br>projects - display my projects<br>clear - clear the terminal<br>back - go back to the previous directory</div>"
      );
    } else {
      setOutput(
        output +
          `<div class="terminal-prompt"><span>${path}\\></span>${input}</div>`
      );
    }
    setInput("");
  }

  return (
    <div>
      <div className="terminal">
        <div className="terminal-header">Terminal</div>
        <div
          className="terminal-body cursor-blink"
          dangerouslySetInnerHTML={{ __html: output }}
        ></div>
        <form onSubmit={handleFormSubmit}>
          <div className="terminal-prompt">
            <span>
              <i className="fa fa-folder"></i>&nbsp;{path}
            </span>
            <input
              type="text"
              className="terminal-input"
              placeholder="Type `ls` to start..."
              value={input}
              onChange={handleInputChange}
              autoFocus
            />
          </div>
        </form>
      </div>

      <div className="instructions">
        <p>
          Welcome to the Resume through Terminal! Here are some available
          commands:
        </p>
        <ul>
          <li>
            <strong>ls</strong> - list all available directories and files
          </li>
          <li>
            <strong>cd</strong> [directory] - change the current directory
          </li>
          <li>
            <strong>clear</strong> - clear the terminal screen
          </li>
          <li>
            <strong>back</strong> - go back one directory
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Terminal;
