import React, { useRef, useState } from "react";

import clouds from "../assets/gigi.mp3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
const Player = () => {
  const [play, setPlay] = useState(false);
  const audio = useRef();
  const toggleAudio = () => {
    if (play === true) {
      setPlay(false);
      audio.current.pause();
    }
    if (play === false) {
      setPlay(true);
      audio.current.play();
    }
  };

  return (
    <div className="flex flex-col">
      <audio
        className="hidden"
        ref={audio}
        src={clouds}
        type="audio/mp3"
        autoPlay
        controls
      ></audio>
      <div className="flex justify-center items-center bg-gray-300 self-start rounded-full w-16 h-16">
        {play ? (
          <FontAwesomeIcon
            onClick={() => toggleAudio()}
            icon={solid("pause")}
            size="2xl"
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => toggleAudio()}
            icon={solid("play")}
            size="2xl"
          />
        )}
      </div>
    </div>
  );
};

export default Player;
