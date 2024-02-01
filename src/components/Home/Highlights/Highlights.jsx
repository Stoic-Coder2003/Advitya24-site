import React from 'react';
import YouTube from 'react-youtube';
import './Highlights.css';

function Highlights() {
  const [playVideo, setPlayVideo] = React.useState(false);

  const opts = {
    height: '597px',
    width: '1219px',
    playerVars: {
      autoplay: 1,
    },
  };

  function Video() {
    setPlayVideo(!playVideo);
  }

  return (
    <section className='flex flex-col justify-center items-center mb-80'>
      <p className='font-[Rubik] text-[64px] font-semibold mb-14'>AdVITya’23 highlights</p>
      <div className='videos rounded-3xl bg-contain' onClick={Video}>
        {playVideo ? (
          <YouTube videoId="j-b2v8ZaOfM" opts={opts} />
        ) : (
          <img src="public\images\video.png" alt="video" />
        )}
      </div>
    </section>
  );
}

export default Highlights;
