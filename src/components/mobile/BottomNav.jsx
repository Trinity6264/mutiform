import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentIndex, toNextIndex, toPreviousIndex } from '../../feature/CurrentIndexSlice';

const BottomNav = () => {
  const disPatch = useDispatch();
  const currentIndex = useSelector(selectCurrentIndex)

  // Creating function to increase and decrease state

  const increaseIndex = () => {
    disPatch(toNextIndex())
  }
  const decreaseIndex = () => {
    disPatch(toPreviousIndex())
  }

  return (
    <section className='bottom-nav' style={{
      justifyContent: (currentIndex === 1) ? 'flex-end' : 'space-between'
    }}>

      {/* if state == 1 true else false */}
      {currentIndex !== 1 && <p onClick={decreaseIndex}>Go Back</p>}
      <button onClick={increaseIndex}>Next Step</button>
    </section>
  )
}

export default BottomNav