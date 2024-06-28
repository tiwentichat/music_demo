// src/components/AudioButtons.js
import React, { useState } from 'react';

const AudioButtons = () => {
  const [audioSrc, setAudioSrc] = useState('');

  const playAudio = (src) => {
    setAudioSrc(src); 
    const audioElement = document.getElementById('audioPlayer');
    audioElement.load();
    audioElement.play();
  };

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '10px' }}>
      <button className="button-audio" onClick={() => playAudio('/audio/audio1.mp3')}>
        音频1
      </button>
      <button className="button-audio" onClick={() => playAudio('/audio/audio2.mp3')}>
        音频2
      </button>
      <button className="button-audio" onClick={() => playAudio('/audio/audio3.mp3')}>
        音频3
      </button>
      <audio id="audioPlayer" style={{ display: 'none' }} src={audioSrc} type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioButtons;