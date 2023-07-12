// eslint-disable-next-line import/no-extraneous-dependencies
import ReactPlayer from "react-player";
import React, { useState } from "react";

export function Player() {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isReady, setIsReady] = React.useState(false);
  const playerRef = React.useRef();

  const onReady = React.useCallback(() => {
    if (!isReady) {
      const timeToStart = 7 * 60 + 12.6;
      playerRef.current.seekTo(timeToStart, "seconds");
      setIsReady(true);
    }
  }, [isReady]);
  return (
    <ReactPlayer
      ref={playerRef}
      url="https://turfguru.s3.ap-south-1.amazonaws.com/rVid.mp3"
      playing={isPlaying}
      width="100%"
      height="100%"
      controls
      onReady={onReady}
    />
  );
}
