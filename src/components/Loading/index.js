import React from 'react';
import Lottie from 'react-lottie';
// import { Container } from './styles';
import './loading.css';

import loadingIcons from '../../assets/animations/loading-icons.json';

export default function Loading() {
  const defOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingIcons,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="animation-container">
      <Lottie options={defOptions} height={400} width={400} />
      <h1>Loading...</h1>
    </div>
  );
}
