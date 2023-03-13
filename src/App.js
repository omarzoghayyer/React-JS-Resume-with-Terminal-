import React, { useState } from "react";
import "./App.css";
import "./Terminal.css";



function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [path, setPath] = useState("C:\dev");
  

  function handleInputChange(event) {
    setInput(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    const command = input.trim();
    if (command === "ls") {
      setOutput(output + "<div class='white-text'>" + "\-background<br>" +  "\-resume<br>" + "\-interest</div>");
    } else if (command === "clear") {
      setOutput("");
    } else if (command.startsWith("cd")) {
      const newPath = command.split(" ")[1];
      if (newPath === "..") {
        setPath("C:\dev");
      } else {
        setPath(path + "\\" + newPath);
      }
    } else {
      setOutput(output + "<div class='terminal-prompt'><span>" + path + "\\></span>" + input + "</div>");
    }
    setInput("");
  }

  return (
    <div className="terminal">
      <div className="terminal-header">Terminal</div>
      <div className="terminal-body" dangerouslySetInnerHTML={{ __html: output }}></div>
      <form onSubmit={handleFormSubmit}>
      <div className="terminal-prompt cursor-blink">
         <span>${path}</span>
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
  );
}

export default Terminal