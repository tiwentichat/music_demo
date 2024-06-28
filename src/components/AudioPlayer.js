// src/components/AudioPlayer.js
import React, { useState, useRef } from 'react';

const AudioPlayer = ({ audioFiles }) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef(null);

  const handlePlay = (url) => {
    if (currentAudio) {
      audioRef.current.pause();
    }
    setCurrentAudio(url);
    audioRef.current.src = url;
    audioRef.current.play();
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {audioFiles.map((file, index) => (
          <button
            key={index}
            onClick={() => handlePlay(file.url)}
            style={{
              margin: '10px',
              padding: '10px 20px',
              borderRadius: '5px',
              backgroundColor: currentAudio === file.url ? 'blue' : 'grey',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {file.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        <audio ref={audioRef} controls style={{ width: '100%' }}>
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;