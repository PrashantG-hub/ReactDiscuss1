import React, { useState, useEffect } from 'react';
import cardImage from '../utils/images/movieHomePage.jpg';
import playButton from '../utils/images/play-circle.png';
import likeButton from '../utils/images/like.png';
import DislikeButton from '../utils/images/dislike.png';


const VideoCard = () => {
  const [likeCount, setLikeCount] = useState(0);


  // useEffect to monitor changes in likeCount
  useEffect(() => {
    // You can perform actions here when likeCount changes, if needed
    // console.log('Like count changed:', likeCount);
  }, [likeCount]);


  const handleLikeClick = () => {
    // Increment likeCount by 1 when the like button is clicked
    setLikeCount(likeCount + 1);
  };

  const handleDisLikeClick = () => {
    // Increment likeCount by 1 when the like button is clicked
    setLikeCount(likeCount - 1);
  };


  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 m-4">
      {/* Video Thumbnail */}
      <img
        className="w-full h-40 object-cover object-center"
        src={cardImage}
        alt="Video Thumbnail"
      />
     
      {/* Video Information */}
      <div className="px-4 py-2">
        <div className='flex '>
          <div className="font-bold text-xl mb-2 text-white">
            <button><img className='w-12  mr-2' src={playButton} alt="Play Button" /></button>
          </div>
          <button onClick={handleLikeClick}>
            <img className='w-10 ml-2 mr-2 mb-4 pl-px-5' src={likeButton} alt="Like Button" />
          </button>
          <button onClick={handleDisLikeClick}><img className='w-10  mb-4 pr-px-5' src={DislikeButton} alt="Dislike Button" /></button>
        </div>
        <p className="text-gray-300">{likeCount} likes</p>
        <div className='flex'>
          <p className=" mr-2 text-green-500">97% Match</p>
          <p className="text-gray-300 text-base">2h 35m</p>
        </div>
        <div>
          <ol className='flex'>
            <li className="text-gray-300 text-base mr-2">Horror</li>
            <li className="text-gray-300 text-base mr-2">Adventure</li>
            <li className="text-gray-300 text-base">Mystery</li>
          </ol>
        </div>
        {/* Display the like count */}
      </div>
    </div>
  );
};


export default VideoCard;
