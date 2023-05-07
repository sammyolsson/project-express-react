import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export const Loader = () => {
  return (
    <div className="loader-container">
      <Player
        src="https://assets10.lottiefiles.com/private_files/lf30_F6EtR7.json"
        className="player"
        loop
        autoplay
        speed={1} />
    </div>
  )
}