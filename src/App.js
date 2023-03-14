import React, { useState } from "react";
import "./App.css";
import "./Terminal.css";
import "./Resume.css";
import "./Instructions.css";


function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [path, setPath] = useState("c:\\omar");

  function showProject() {
    return `
    <div class="terminal-window">
     <div class="terminal-prompt">
      <div class="Projects">
        <p>Project 1</p>
        <p>Project 2</p>
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
          `<div class="yellow-text">--background --projects --resume --interest</div>`
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
       } else if (command === "background") {
        setOutput(
          output +
            `<div class="terminal-prompt"><span>${path}\\background\\></span>Here is my background:</div>` +
            "<div class='white-text'>I hold a busniess degree with experience in tech. My recent project is the one you are using now. The one before that is a simple compiler.</div>"
        );
    } else if (command === "projects") {
      setOutput(
        output +
        `<div class="terminal-prompt"><span>${path}\\></span>o you want to view a GitHub account or print the project description in the terminal? Type 'print' or 'Open Github'</div>`
      );
    } else if(command === "here") {
      setOutput(output + "<div class='white-text'>" + showProject() + "</div>");
    } else if (command === "Open Github") {
      window.open(
        "https://github.com/omarzoghayyer"
      );
  
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
    <dev>
    <div className="terminal">
      <div className="terminal-header">Terminal</div>
      <div
        className="terminal-body cursor-blink"
        dangerouslySetInnerHTML={{ __html: output }}
      ></div>
      
      <form onSubmit={handleFormSubmit}>
        <div className="terminal-prompt">
        <i className="fa fa-folder"></i>&nbsp;
          <span>{path} </span>
          <input
            type="text"
            className="terminal-input"
            placeholder="Enter command..."
            value={input}
            onChange={handleInputChange}
            autoFocus
          />
        </div>
      </form>
    </div>

<div className="instructions">
<p>Welcome to the Terminal! Here are some available commands:</p>
<ul>
  <li>ls - list all available directories and files</li>
  <li>cd [directory] - change the current directory</li>
  <li>clear - clear the terminal screen</li>
</ul>
</div>
</dev>
  );
  
}

export default Terminal;
