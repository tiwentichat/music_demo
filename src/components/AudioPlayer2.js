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
    <div>
      <button onClick={() => playAudio('/audio/audio1.mp3')}>音频4</button>
      <button onClick={() => playAudio('/audio/audio2.mp3')}>音频5</button>
      <button onClick={() => playAudio('/audio/audio3.mp3')}>音频6</button>
      <audio id="audioPlayer" controls>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioButtons;