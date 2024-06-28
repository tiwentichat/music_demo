// src/components/AudioPlayer.js
import React, { useState, useRef } from 'react';

const AudioPlayer = ({ audioFiles }) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const audioRef = useRef(null);

  const handlePlay = (url) => {
    if (currentAudio) {
      audioRef.current.pause();
    }
    setCurrentAudio(url);
    audioRef.current.src = url;
    audioRef.current.play();
  };

  const categories = [...new Set(audioFiles.map(file => file.category))];

  const filteredFiles = selectedCategory
    ? audioFiles.filter(file => file.category === selectedCategory)
    : audioFiles;

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            style={{
              margin: '10px',
              padding: '10px 20px',
              borderRadius: '5px',
              backgroundColor: selectedCategory === category ? 'blue' : 'grey',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {filteredFiles.map((file, index) => (
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
      <div style={{ marginTop: '20px' }}>
        <audio ref={audioRef} controls style={{ width: '100%' }}>
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
  );
};

export default AudioPlayer;