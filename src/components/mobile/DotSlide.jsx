import React, { useState } from 'react'

const DotSlide = () => {
    const [currentIndex, setCurrentIndex] = useState(1)
    const slideList = [1, 2, 3, 4]
    return (

        <section className='dotSlide'>
            {slideList.map((val) => {
                return <div className="circle-wrapper"
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