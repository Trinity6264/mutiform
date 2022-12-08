import React from 'react'
import { useSelector } from 'react-redux'
import StepOne from '../../../components/mobile/StepOne'
import StepThree from '../../../components/mobile/StepThree'
import StepTwo from '../../../components/mobile/StepTwo'
import { selectCurrentIndex } from '../../../feature/CurrentIndexSlice'

const ContentWrapper = () => {
    const currentIndex = useSelector(selectCurrentIndex)
  return (
    <>
    {currentIndex === 1 && <StepOne/>}
    {currentIndex === 2 && <StepTwo/>}
    {currentIndex === 3 && <StepThree/>}
    </>
   
  )
}

export default ContentWrapper