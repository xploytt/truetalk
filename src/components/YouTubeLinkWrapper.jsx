import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import '../styles/YouTubeLinkWrapper.scss';
import YouTubeJpg from '../assets/youtube-image.jpg' 

const YouTubeVideoLinkWrapper = () => {
  return (
    <div className="youtube-video-wrapper">
      <a href='https://www.youtube.com/@truetalkarena7526' target="_blank" rel="noopener noreferrer">
        <img src={YouTubeJpg} alt="Channel" className="channel-image" />
        <div className="overlay">
          <FaYoutube className="youtube-logo" />
        </div>
      </a>
    </div>
  );
};

export default YouTubeVideoLinkWrapper;

