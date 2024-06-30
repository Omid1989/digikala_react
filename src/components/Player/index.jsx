import React, { useRef, useState, useEffect, useContext } from "react";
import style from "./index.module.css";
import ReactHlsPlayer from "react-hls-player";

const index = ({ url }) => {
  const playerRef = React.useRef();

  const [durationSec, setDurationSec] = useState();
  const [currentTime, setCurrentTime] = useState([0, 0]);
  const [currentTimeSec, setCurrentTimeSec] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const sec2Min = (sec) => {
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    return {
      min: min,
      sec: secRemain,
    };
  };

  // useEffect(() => {
  //   const { min, sec } = sec2Min(playerRef.current.duration);
  //   setDurationSec(playerRef.current.duration);
  // }, [isPlaying]);

  const handleTimeUpdate = (event) => {
    setIsPlaying(true);
    setCurrentTimeSec(event.target.currentTime);
    const { min, sec } = sec2Min(event.target.currentTime);
    setCurrentTime([min, sec]);
  };

  return (
    <div className={style.container}>
      <div className={style.playerContainer}>
        <ReactHlsPlayer
          className={style.videoPlayer}
          playerRef={playerRef}
          src={url}
          autoPlay={true}
          controls={false}
          width="60%"
          height="auto"
          onTimeUpdate={handleTimeUpdate}
        />

        <div className={style.controlsContainer}>
          <div className={style.controls}>
            <div className={style.duration}>
              {currentTime[0]}:{currentTime[1]}
            </div>
          </div>
          <input
            type="range"
            min="0"
            max={durationSec}
            default="0"
            value={currentTimeSec}
            className={style.timeline}
            onChange={(e) => {
              playerRef.current.currentTime = e.target.value;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
