import React from 'react'

const OptionCard = ({ img, title, price, isSelected,onClick }) => {
    return (
        <div onClick={onClick} className="option-card" style={{
            border: isSelected ? '1px solid var(--PurplishBlue)' : '1px solid var(--LightGray)',
            backgroundColor: isSelected ? 'var(--Magnolia)': null
        }}>
            <img src={img} alt="Arcade" />
            <div className="mini-info">
                <h4>{title}</h4>
                <p>{price}</p>
                <p className='months'>2 months free</p>
            </div>
        </div>
    )
}

export default OptionCard