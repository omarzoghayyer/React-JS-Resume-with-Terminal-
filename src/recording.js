import React from "react";
import MyImage from "./MyImage";
import recording from "./recordings/my_recording.mp3"; // Path to your recording file

import "./style/Recording.css";

function Recording() {
  return (
    <div>
      {/* Right side for the audio player */}
      <div className="audio-player">
        <h3>Listen to my recording:</h3>
        <audio id="audio" controls>
          <source src={recording} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>   
      </div>
    </div>
  );
}

export default Recording;
