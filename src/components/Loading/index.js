import React from 'react';
import LottieLoading from 'react-lottie';
// import { Container } from './styles';
import './loading.css';

import loadingIcons from '../../assets/animations/loading-icons.json';

export default function Loading() {
  const defOptions = {
    title: "loading",
    loop: true,
    autoplay: true,
    animationData: loadingIcons,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div className="animation-container">
      <LottieLoading options={defOptions} height={400} width={400} />
      <h1>Loading...</h1>
    </div>
  );
}
