// VideoPlayer.js
import React from 'react';
const VideoPlayer = () => {
return (
<div>
<iframe
width="100%"
height="315"
src="https://www.youtube.com/embed/rTDaZoDDW5g"
title="YouTube video player"
frameBorder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture"
allowFullScreen
></iframe>
</div>
);
};
export default VideoPlayer;
