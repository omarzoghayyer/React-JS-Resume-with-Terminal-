import React, { useState } from "react";
import "./App.css";
import "./Terminal.css";
import "./Resume.css";
import "./Instructions.css";

function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [path, setPath] = useState("c:\\omar");



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
      const results = ["--background", "--projects", "--resume", "--interest"];
      const formattedResults = results.map(result => `<span class="yellow-text">${result}</span>`);
      setOutput(output + formattedResults.join(" ") + "<br>");
    } else if (command === "clear") {
      setOutput("");
    } else if (command.startsWith("cd")) {
      const newPath = command.split("  ")[1];
      if (newPath === "..") {
        setPath("C:\\dev");
      } else {
        setPath(path + "\\" + newPath);
      }
    } else if (command === "resume") {
      setPath("C:\\omar\\resume");
      setOutput(output + "<div class='terminal-prompt'><span>" + path + "\\></span>" + "Would you like to print the resume in the terminal or open a PDF? Type 'print' or 'pdf'</div>");
    } else if (command === "print") {
      setOutput(output + "<div class='white-text'>" + showResume() + "</div>");
    } else if (command === "pdf") {
      window.open("https://docs.google.com/document/d/11RYtznPfIiShgd5lti7pooI-ib49M6Elq16s5Eald-o/edit?usp=sharing");
    } else if (command === "back") {
      setPath("C:\\omar\\");
      setOutput("");
    } else {
      setOutput(output + "<div class='terminal-prompt'><span>" + path + "\\></span>" + input + "</div>");
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
  <li>resume - view my resume</li>
</ul>
</div>
</dev>
  );
  
}

export default Terminal;
