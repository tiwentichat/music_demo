// src/components/AudioPlayer.js
import React, { useState, useRef, useEffect } from 'react';

const AudioPlayer = ({ categories, audioFiles }) => {
  const [currentAudio, setCurrentAudio] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(categories ? categories[0] : null);
  const audioRef = useRef(null);

  const handlePlay = (url) => {
    if (currentAudio) {
      audioRef.current.pause();
    }
    setCurrentAudio(url);
    audioRef.current.src = url;
    audioRef.current.play();
  };

  const filteredFiles = categories ? audioFiles.filter(file => file.category === selectedCategory) : audioFiles;

  useEffect(() => {
    // 移除或注释掉这一行以显示音频进度条
    // if (audioRef.current) {
    //   audioRef.current.controls = false; // 隐藏控制条
    // }
  }, []);

  return (
    <div>
      <div style={{ marginTop: '20px' }}>
        <audio ref={audioRef} controls style={{ width: '100%' }}>
          Your browser does not support the audio element.
        </audio>
      </div>
      {categories && (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start', marginBottom: '20px' }}>
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              style={{
                margin: '10px',
                padding: '10px 20px',
                borderRadius: '0px', // 更直角一些
                backgroundColor: selectedCategory === category ? 'rgb(193, 44, 31)' : 'rgb(239, 239, 239)',
                color: selectedCategory === category ? 'white' : 'black',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s, transform 0.3s',
                transform: selectedCategory === category ? 'scale(1.05)' : 'scale(1)',
                whiteSpace: 'nowrap', // 防止文字换行
                overflow: 'hidden', // 隐藏溢出的文字
                textOverflow: 'ellipsis', // 用省略号代替溢出的文字
                minWidth: '50px', // 确保按钮有最小宽度
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgb(177, 59, 46)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = selectedCategory === category ? 'rgb(193, 44, 31)' : 'rgb(239, 239, 239)'}
            >
              {category}
            </button>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
        {filteredFiles.map((file, index) => (
          <button
            key={index}
            onClick={() => handlePlay(file.url)}
            style={{
              margin: '10px',
              padding: '10px 20px',
              borderRadius: '20px', // 更圆一些
              backgroundColor: currentAudio === file.url ? 'rgb(193, 44, 31)' : 'rgb(239, 239, 239)',
              color: currentAudio === file.url ? 'white' : 'black',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
              transition: 'background-color 0.3s, transform 0.3s',
              transform: currentAudio === file.url ? 'scale(1.05)' : 'scale(1)',
              whiteSpace: 'nowrap', // 防止文字换行
              overflow: 'hidden', // 隐藏溢出的文字
              textOverflow: 'ellipsis', // 用省略号代替溢出的文字
              minWidth: '50px', // 确保按钮有最小宽度
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgb(177, 59, 46)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = currentAudio === file.url ? 'rgb(193, 44, 31)' : 'rgb(239, 239, 239)'}
          >
            {file.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AudioPlayer;