import React,{useEffect, useState} from 'react'
import {Form,Button,Row,Col} from "react-bootstrap"
import {useParams,useNavigate} from "react-router-dom"
import axios from "axios"
const Edit = () => {
    let {emp_id} = useParams()
    let [inputs,setInput] = useState({ename:"",post:"",gender:"",salary:""})
    let navigate = useNavigate()
   useEffect(() => {
    axios.get(`http://localhost:2000/product/${emp_id}`)
    .then(res=>{
       console.log("Axios res :",res);
       setInput(res.data)
    })
    .catch(err=>{
  console.log("Axios err :",err);
  alert(err.message)
    })
   },[setInput,emp_id])

let handelEditSubmit = (e) =>{
 e.preventDefault();
 console.log("Submitted Values :",inputs);
 axios.put(`http://localhost:2000/product/${inputs.id}`,inputs)
 .then(res=>{
   console.log("Axios res :",res);
   alert("Edit successful")
   navigate("/")
 })
 .catch(err=>{
    console.log("Axios error :",err);
    alert(err.message)
 })
}
   
  return (
    <>
    <div className='Container p-5'>

        <Form className='p-5 bg-secondary-subtle' onSubmit={handelEditSubmit}>
            <h1>Edit Form</h1>
            <Row className='md-3'>
                <Form.Group as={Col}>
                    <Form.Label className='fw-semibold fst-italic' htmlFor='ename'>Employee Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='ename'
                        placeholder='Enter Name'
                        id='ename'
                        value={inputs.ename}
                        onChange={(e)=>{
                            setInput((prev)=>({...prev,ename:e.target.value}))
                        }}
                    />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label className='fw-semibold fst-italic' htmlFor='post'>Job Post</Form.Label>
                    <Form.Control
                        type='text'
                        name='post'
                        placeholder='Enter Post'
                        id='post'
                        value={inputs.post}
                        onChange={(e)=>{
                            setInput((prev)=>({...prev,post:e.target.value}))
                        }}
                    />

                </Form.Group>
            </Row>

            <Form.Group>
                <Form.Label className='fw-semibold fst-italic' htmlFor='gender'>Gender</Form.Label>
                <Form.Select name='gender' id='gender' value={inputs.gender} onChange={(e)=>{
                            setInput((prev)=>({...prev,gender:e.target.value}))
                        }}>
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
                     value={inputs.salary}
                     onChange={(e)=>{
                        setInput((prev)=>({...prev,salary:e.target.value}))
                    }}
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

export default Edit