import React, { useState, useRef } from 'react';

const AudioPlayer = ({ audioFiles }) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef(null);

  const handlePlay = (url, label) => {
    if (currentAudio) {
      audioRef.current.pause();
    }
    setCurrentAudio(url);
    audioRef.current.src = url;
    audioRef.current.play();

    // 复制标签内容
    navigator.clipboard.writeText(label).then(() => {
      // 显示提示
      const alert = document.createElement('div');
      alert.textContent = '标签内容已经复制';
      alert.style.position = 'fixed';
      alert.style.bottom = '20px';
      alert.style.left = '50%';
      alert.style.transform = 'translateX(-50%)';
      alert.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
      alert.style.color = 'white';
      alert.style.padding = '10px 20px';
      alert.style.borderRadius = '5px';
      alert.style.zIndex = '1000';
      document.body.appendChild(alert);

      setTimeout(() => {
        document.body.removeChild(alert);
      }, 2000);
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {audioFiles.map((file, index) => (
          <button
            key={index}
            onClick={() => handlePlay(file.url, file.label)}
            style={{
              margin: '10px',
              padding: '10px 20px',
              borderRadius: '5px',
              backgroundColor: currentAudio === file.url ? '#8B0000' : '#F0F0F0',
              color: currentAudio === file.url ? 'white' : 'black',
              border: 'none',
              cursor: 'pointer',
              flex: '1 1 calc(20% - 20px)',
              maxWidth: 'calc(20% - 20px)',
              transition: 'background-color 0.3s, box-shadow 0.3s',
              boxShadow: currentAudio === file.url ? '0 4px 8px rgba(0, 0, 0, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            onMouseEnter={(e) => {
              if (currentAudio !== file.url) {
                e.target.style.backgroundColor = '#FF6347';
                e.target.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (currentAudio !== file.url) {
                e.target.style.backgroundColor = '#F0F0F0';
                e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              }
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