import React from 'react';
import VideoList from './components/VideoList';
import './App.css';

const App = () => {
  return (
    <div className='app-container'>
      <h2 className='app-title'>Free football highlights</h2>
      <p className='app-subtitle'>
        Most recent matches, scroll down to see more...
      </p>
      <VideoList />
    </div>
  );
};

export default App;
