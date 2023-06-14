import React, { useEffect, useState } from 'react'
import {useParams,useNavigate,Link} from "react-router-dom"
import axios from "axios"
import {Image} from "react-bootstrap"
import { Button } from 'react-bootstrap'
const Details = () => {
    let {empid} = useParams()
    // console.log("Employee id :",empid);
    let [emp,setEmpData] = useState([])
     let navigate =useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:2000/product/${empid}`)
        .then(res=>{
            console.log("Axios res :",res);
            setEmpData(res.data)
        })
        .catch(err=>{
            console.log("Axios err :",err);
            alert(err.message);
        })
    },[setEmpData,empid])

    let handelDelete = (id) => {
        console.log("ID of the Employee :",id);
        axios.delete(`http://localhost:2000/product/${id}`)
        .then(res=>{
            console.log("Axios res :",res);
             alert("Employee is deleted");
             navigate("/")
        })
        .catch(err=>{
           console.log("Axios error :",err);
           alert(err.message);
        })
    }
    
    let image;
    if(emp.gender === 'male'){
         image = 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    }else if(emp.gender === 'female'){
         image = "https://icon-library.com/images/female-profile-icon/female-profile-icon-20.jpg"
    }else{
       image="https://thumbs.dreamstime.com/b/user-profile-icon-vector-avatar-person-picture-portrait-symbol-neutral-gender-silhouette-circle-button-photo-blank-272664038.jpg"
    }
  
  return (
    <div className='Container'>
        <div className='row'>
            <div className='col-lg-6 p-4'>
            
            <Image
               src={image}
               alt='profile image'
               height={300}
               width={300}
               />

            </div>
            <div className='col-lg-6 pt-5'>
             <div className='row'>
               <div className='col-4'>
                 <span className='text-primary'>Name :-{' '}</span>{emp.ename}
               </div>

               <div className='col-4'>
                 <span className='text-primary'>Post :-{' '}</span>{emp.post}
               </div>

             </div><br/><br/>

             <div className='row'>
             <div className='col-4'>
                 <span className='text-primary'>Gender :-{' '}</span>{emp.gender}
               </div>

               <div className='col-4'>
                 <span className='text-primary'>Salary :-{' '}</span>{emp.salary}
               </div>
             </div><br/>
             <Link to={`/edit/${emp.id}`}>
             <Button variant='outline-warning'>Edit</Button> 
             </Link>{' '}
             <Button variant='outline-danger' onClick={()=>{handelDelete(emp.id)}}>Delete</Button>
            </div>

        </div>

    </div>
  )
}

export default Details