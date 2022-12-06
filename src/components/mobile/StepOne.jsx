import React from 'react'
import { Form } from 'react-bootstrap'

const StepOne = () => {
    return (
        <section className='card'>
            <h1>Personal info</h1>
            <p>Please provide your name, email <br /> address, and phone number.</p>
            <Form>
                <Form.Group className='group'>
                    <Form.Label htmlFor='name'>Name</Form.Label>
                    <Form.Control id='name' placeholder='e.g. Stephen King'></Form.Control>
                </Form.Group>
                <Form.Group className='group'>
                    <Form.Label htmlFor='email'>Email Address</Form.Label>
                    <Form.Control id='email' placeholder='e.g. stephenking@lorem.com'></Form.Control>
                </Form.Group>
                <Form.Group className='group'>
                    <Form.Label htmlFor='phone'>Phone Number</Form.Label>
                    <Form.Control id='phone' placeholder='e.g. +1 234 567 890'></Form.Control>
                </Form.Group>

            </Form>
        </section>
    )
}

export default StepOne