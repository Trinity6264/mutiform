import React, { useState } from 'react'
import PickAddOption from './PickAddOption';

const StepThree = () => {
    const [list, setList] = useState([
        {
            id: 1,
            title: 'Online service',
            subTitle: 'Access to multiple games',
            selected: false,
            price: '+$10/yr'

        },
        {
            id: 2,
            title: 'Larger storage',
            subTitle: 'Extra 1TB of cloud save',
            selected: false,
            price: '+$20/yr'

        },
        {
            id: 3,
            title: 'Customizable profile',
            subTitle: 'Custom theme on your profile',
            selected: false,
            price: '+$20/yr'
        },
    ]);

    const onSelect = (selectedId) => {
        const currentIndex = list.find(({ id }) => id === selectedId)
        // const rest = list.filter(({id})=> id !== selectedId)
        if (currentIndex) {
            setList([...list, currentIndex.selected = !currentIndex.selected ])
        }
    }

    return (
        <section className='card'>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming <br /> experience.</p>
            {list.map(({ id, price, subTitle, title, selected }) => {
                return <PickAddOption click={()=> onSelect(id)} selected={selected} key={id} price={price} title={title} subTitle={subTitle} />
            })}
        </section>
    )
}

export default StepThree