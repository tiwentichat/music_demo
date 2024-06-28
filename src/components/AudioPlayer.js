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
              flex: '1 1 calc(20% - 20px)', // 让按钮占据50%的宽度，减去间距
              maxWidth: 'calc(20% - 20px)', // 最大宽度为50%，减去间距
            }}
          >
            {file.label}
          </button>
        ))}
      </div>
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, 0.5)', padding: '10px', textAlign: 'center' }}>
        <audio ref={audioRef} controls style={{ width: '100%' }}>
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;