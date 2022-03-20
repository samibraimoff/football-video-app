import React from 'react';
import parse from 'html-react-parser';
import Moment from 'react-moment';
import './videoitem.css';

const VideoItem = ({ video }) => {
  return (
    <div className='video-item'>
      <h4>{video.title}</h4>
      <div className='video-info'>
        <h5>{video.competition}</h5>
        <h5>
          <Moment format='YYYY/DD/MM'>{video.date}</Moment>
        </h5>
      </div>
      <div className='video'>{parse(video.videos[0].embed)}</div>
    </div>
  );
};

export default VideoItem;
