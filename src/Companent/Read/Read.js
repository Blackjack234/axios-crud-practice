import React, { useEffect, useState } from 'react'
import axios from "axios"
import Banner from '../../layout/banner/Banner'
import {Container,Row,Card,Col} from "react-bootstrap"
const Read = () => {
  let [emp,setEmp] = useState([])
  let api_link = "http://localhost:2000/product"


  useEffect(() => {
axios.get(api_link)
.then(res=>{
    console.log("Axios res :",res);
    setEmp(res.data)
    // console.log("Employee :",emp);
})
.catch(err=>{
    console.log("Axios err :",err);
})
},[api_link,setEmp])

  return (
    <>
    <Banner/>
     <Container>
        <Row>

            {
                emp.map(Emp => (
                    <React.Fragment key={Emp.id}>
                      <Col className='mt-2 mb-2'>
                       <Card style={{width: "18rem"}}>
                        <Card.Body>
                            <Card.Title>{Emp.ename}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{Emp.post}</Card.Subtitle>
                            <Card.Text>
                               Gender:- {Emp.gender}<br/>
                               Salary:- {Emp.salary}
                            </Card.Text>

                            <Card.Link href={`/details/${Emp.id}`}>Details</Card.Link>

                        </Card.Body>
                       </Card>
                      </Col>
                    </React.Fragment>
                ))
            }
        </Row>
     </Container>
    </>
  )
}

export default Read