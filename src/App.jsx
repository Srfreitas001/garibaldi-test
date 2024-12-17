import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Preview from './Components/Preview/Preview';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import Title2 from './Components/Title/Title2';
import Title3 from './Components/Title/Title3';
import Gallery from './Components/Gallery/Gallery';
import Follow from './Components/Follow/Follow';
import Footer from './Components/Footer/Footer';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import Highlights from './Components/Highlights/Highlights';




const App = () => {

  const [playState, setPlayState] = useState(false);

  return (


    <div>




      <Navbar />

      <Hero />




      <div className='container'>
        <Highlights />
        {/* <Title subtitle='O que oferecemos' title='O Palácio' /> */}
        {/* <Preview /> */}

        <main className='main-1'>


          <About setPlayState={setPlayState} />
        </main>



        <Title3 subtitle3='Galeria' title3='' />
        <Gallery />
        <Follow />
        <Footer />
      </div>

      <VideoPlayer playState={playState} setPlayState={setPlayState} />


    </div>






  )
};

export default App;