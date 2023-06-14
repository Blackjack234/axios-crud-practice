import React, { useState } from 'react'
import { Row, Form, Col, Button } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const Create = () => {
    let [inputs, setInput] = useState({ ename: "", post: "", gender: "", salary: "" })
    let navigate = useNavigate()
    let handelChange = (e) => {
        e.persist()
        let { name, value } = e.target
        //    console.log("Name of input :",name," value of input :",value);

        setInput({ ...inputs, [name]: value })

    }
    let handelSubmit = (e) => {
        e.preventDefault()
        let api_link = "http://localhost:2000/product"
        let data = {
            ename: inputs.ename,
            post: inputs.post,
            gender: inputs.gender,
            salary: inputs.salary
        }
        axios.post(api_link, data)
            .then(res => {
                console.log("Axios res :", res);
                alert("Employee is Registered")
                navigate("/")
            })
            .catch(err => {
                console.log("Axios error :", err);
                alert(err.message)
            })
    }
    return (
        <>
            <div className='Container p-5'>

                <Form className='p-5 bg-secondary-subtle' onSubmit={handelSubmit}>
                    <h1>Registration Form</h1>
                    <Row className='md-3'>
                        <Form.Group as={Col}>
                            <Form.Label className='fw-semibold fst-italic' htmlFor='ename'>Employee Name</Form.Label>
                            <Form.Control
                                type='text'
                                name='ename'
                                placeholder='Enter Name'
                                id='ename'
                                onChange={handelChange}
                            />
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label className='fw-semibold fst-italic' htmlFor='post'>Job Post</Form.Label>
                            <Form.Control
                                type='text'
                                name='post'
                                placeholder='Enter Post'
                                id='post'
                                onChange={handelChange}
                            />

                        </Form.Group>
                    </Row>

                    <Form.Group>
                        <Form.Label className='fw-semibold fst-italic' htmlFor='gender'>Gender</Form.Label>
                        <Form.Select name='gender' id='gender' onChange={handelChange}>
                            <option>Select</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                            <option value='other'>Other</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className='fw-semibold fst-italic' htmlFor='salary'>
                            Salary
                        </Form.Label>
                        <Form.Control
                            type='text'
                            name='salary'
                            placeholder='Enter Salary'
                            id='salary'
                            onChange={handelChange}
                        />
                    </Form.Group><br /><br />

                    <Button variant='outline-primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    )
}

export default Create