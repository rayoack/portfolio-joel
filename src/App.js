import React/* , { useState, useEffect }  */from 'react';
import { BrowserRouter } from 'react-router-dom';

/* import LoadAnimation from './components/Loading'; */

import Header from './components/Header';
import Routes from './routes';

function App() {
/*   const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(
      function changeLoading() {
        setLoading(false)
      }, 4000);
    }
  ) */

  return (
/*     isLoading ?
      <LoadAnimation />
      : */
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
