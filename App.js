import React from 'react'
import Media from "./components/InTheMedia/Media";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import SignUp from "./components/SignUp/SignUp";
import ImageSection from "./components/ImageSection/ImageSection";
import PriceAlert from "./components/PriceAlert/PriceAlert";
import Article from "./components/Article/Article";
import WhatDoWeServe from "./components/WhatDoWeServe/WhatDoWeServe";
import Maincard from "./components/HeroSection/HeroSection";
import WhatClientSays from "./components/WhatClientSays/WhatClientSays"
import WatchVideo from "./components/WatchVideo/WatchVideo";
import WhyGoDigital from "./components/WhyGoDigital/WhyGoDigital";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Home() {
  return (
    <div className='App'>
    <Header/>
        <Maincard />
        <WhyGoDigital/>
        <ImageSection />
        <WhatClientSays/>
        <WatchVideo/>
        <PriceAlert />
        <WhatDoWeServe />
        <Media />
        <Article />
        <SocialMedia />
        <SignUp />
        <Footer/>
    </div>
  )
}

export default Home
