import React from 'react'
import Devices from './components/Devices';
import Footer from './components/Footer';

import Hear from './components/Hear';
import Hero from './components/Hero';
import Listen from './components/Listen';
import Navbar from './components/Navbar';
import Plan from './components/Plan';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Plan />
      <Listen />
      <Hear />
      <Devices />
      <Footer />
    </>
  );
}

export default App;
