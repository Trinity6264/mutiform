import React from 'react'

import { Form } from 'react-bootstrap'

const PickAddOption = ({ click, price, subTitle, title,selected }) => {
    return (
        <div 
        onClick={click}
        className="pick-add-card" style={{
            border: selected ? '1px solid var(--PurplishBlue)' : '1px solid var(--LightGray)',
            backgroundColor: selected ? 'var(--Magnolia)': null
        }}>
            <Form.Check checked={selected} className='form-check' />
            <div className="add-center-div">
                <h4>{title}</h4>
                <small>{subTitle}</small>
            </div>
            <small className="yr">
                {price}
            </small>
        </div>
    )
}

export default PickAddOption