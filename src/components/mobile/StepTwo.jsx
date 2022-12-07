import React, { useState } from 'react'


import ArcadePic from '../../asset/icon-arcade.svg'
import AdvancePic from '../../asset/icon-advanced.svg'
import ProPic from '../../asset/icon-pro.svg'
import OptionCard from './OptionCard'
import { Form } from 'react-bootstrap'
const StepTwo = () => {
    const [ids, setId] = useState(null);

    const listOfPlan = [
        {
            id: 1,
            title: 'Arcade',
            price: '$90/yr',
            img: ArcadePic

        },
        {
            id: 2,
            title: 'Advanced',
            price: '$120/yr',
            img: AdvancePic

        },
        {
            id: 3,
            title: 'Pro',
            price: '$150/yr',
            img: ProPic
        },
    ];

    return (
        <section className='card'>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or <br /> yearly billing.</p>
            {
                listOfPlan.map(({ img, price, title, id }) => {
                    return <OptionCard onClick={() => setId(id)} isSelected={id === ids} img={img} price={price} title={title} key={title} />
                })
            }
            <div className="toggle-wrapper">
                <p className='month'>Month</p>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                   style={{
                    color: 'var(--MarineBlue)',

                   }}
                />
                <p>Yearly</p>
            </div>
        </section>
    )
}

export default StepTwo