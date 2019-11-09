import React from 'react';
import Lottie from 'react-lottie';

import BoxCode from '../../assets/animations/box-code.json';

import './aniSquare.css';

export default function AniSquare() {
  const defaultOptions = {
    title: "home",
    loop: true,
    autoplay: true,
    animationData: BoxCode,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="animation-container">
      <Lottie options={defaultOptions} />
    </div>
  )
}