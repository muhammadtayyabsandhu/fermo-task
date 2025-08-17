import React from 'react'
import HeroSection from './HeroSection'
import MarketingSection from './MarketingSection'
import TestimonialSlider from './TestimonialSlider'
import TrustedBy from './TrustedBy'
import FloatingStats from './FloatingStats'
import VideoSection from './VideoSection'
import WhyChooseUs from './WhyChooseUs'

const Home = () => {
  return (
    <>
    <HeroSection/>
    <FloatingStats/>
    <TrustedBy/>
    <WhyChooseUs/>
    <VideoSection/>
    <MarketingSection/>
    <TestimonialSlider/>
    </>
  )
}

export default Home