import React, { useState } from 'react'
import { Form, Button, Col, InputGroup } from 'react-bootstrap'

function RegisterScreen() {

    const [validated, setValidated] = useState(false)

    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        }
    })


    const changeInputRegister = event => {
        event.persist()
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitRegister = event => {
        const form = event.currentTarget;
        if (form.checkValidity() == false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    }


    return (
        <Form noValidate validated={validated} onSubmit={submitRegister}>
            <Form.Group as={Col} md="4" className='mb-3' controlId='formBasicUsername'
                onChange={changeInputRegister}>
                <Form.Label>Username</Form.Label>
                <Form.Control required type='username' placeholder='Enter username' />
                <Form.Control.Feedback>Nice!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" className='mb-3' controlId='formBasicEmail'
                onChange={changeInputRegister}>
                <Form.Label>Email Adress</Form.Label>
                <Form.Control required type='email' placeholder='Enter email' />
                <Form.Control.Feedback type='invalid'>
                    Please enter valid email.
                </Form.Control.Feedback>
                <Form.Text className='text-muted'>
                        We'll never share your email with anyone else
                </Form.Text>
            </Form.Group>

            <Form.Group as={Col} md="4" className='mb-3' controlId='formBasicPassword' 
                onChange={changeInputRegister}>
                <Form.Label>Password</Form.Label>
                <Form.Control required type='password' placeholder='Enter password' />
            </Form.Group>

            <Form.Group as={Col} md="4" className='mb-3' controlId='formBasicConfirmPassword' 
                onChange={changeInputRegister}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control required type='password' placeholder='Enter password' />
            </Form.Group>

            <Button variant='dark' type='submit'>
                Register
            </Button>
        </Form>
    )
}

export default RegisterScreen