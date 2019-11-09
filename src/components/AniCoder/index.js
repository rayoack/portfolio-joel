import React from 'react';
import Lottie from 'react-lottie';

import './aniCoder.css';

import Coder from '../../assets/animations/programming-edited.json';

export default function AniCoder() {
  const defOptions = {
    title: "coder",
    loop: true,
    autoplay: true,
    animationData: Coder,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="coder-container">
      <Lottie className="coder-animation" options={defOptions} width={400} height={400} />
    </div>
  )
}