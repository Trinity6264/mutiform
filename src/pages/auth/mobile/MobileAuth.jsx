import React from 'react'
import BackgroundPic from '../../../components/mobile/BackgroundPic'
import BottomNav from '../../../components/mobile/BottomNav'
import DotSlide from '../../../components/mobile/DotSlide'
import '../../../style/MobileAuthStyle.css'
import ContentWrapper from './ContentWrapper'

const MobileAuth = () => {
  return (
    <div className='mobile-auth'>
      <BackgroundPic />
      <div className="overlay-wrapper">
      <DotSlide/>
      <ContentWrapper/>
      <BottomNav/>
      </div>
    </div>
  )
}

export default MobileAuth