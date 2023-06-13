import React from 'react'
import Home from '../../components/Home';
import AboutUs from '../../components/AboutUs';
import WhatIs from '../../components/WhatIs';
import Advantages from '../../components/Advantages';
import LearnMore from '../../components/LearnMore';
import Calculator from '../../components/Calculator';
import Footer from '../../components/Footer';


export default function Main() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Home />
      <AboutUs />
      <WhatIs />
      <Advantages />
      <Calculator />
      <LearnMore />
      <Footer />
    </>
  )
}
