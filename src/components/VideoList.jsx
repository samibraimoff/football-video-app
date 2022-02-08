import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import VideoItem from './VideoItem';
import './videolist.css';

const VideoList = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get('https://www.scorebat.com/video-api/v3/');
    setData(res.data.response);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <Fragment>
      <div className='list-container'>
        {data.length > 0 &&
          data
            .slice(1, 10)
            .map((video) => <VideoItem key={video.thumbnail} video={video} />)}
      </div>
    </Fragment>
  );
};

export default VideoList;
