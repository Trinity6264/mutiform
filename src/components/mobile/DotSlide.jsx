import React from 'react'
import {  useSelector } from 'react-redux'
import { selectCurrentIndex } from '../../feature/CurrentIndexSlice'

const DotSlide = () => {
    const currentIndex = useSelector(selectCurrentIndex)
    const slideList = [1, 2, 3, 4]
    return (

        <section className='dotSlide'>
            {slideList.map((val) => {
                return <div 
                key={val}
                className="circle-wrapper"
                    style={{
                        color: (currentIndex === val) ? 'var(--Black)' : 'var(--White)',
                        backgroundColor: (currentIndex === val) ? 'var(--LightBlue)' : null
                    }}
                >
                    {val}
                </div>
            })}


        </section>


    )
}

export default DotSlide