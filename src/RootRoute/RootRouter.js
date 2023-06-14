import React from 'react'
import {Route,Routes,BrowserRouter as Router} from "react-router-dom"
import Create from '../Companent/Create/Create'
import Read from '../Companent/Read/Read'
import Header from '../layout/Header/Header'
import Footer from '../layout/Footer/Footer'
import Details from '../Companent/Details/Details'
import Edit from '../Companent/Edit/Edit'
const RootRouter = () => {
  return (
   <Router>
    <Header/>
    <Routes>
        <Route path='' element={<Read/>}/>
        <Route path='create' element={<Create/>}/>
        <Route path='details/:empid' element={<Details/>}/>
        <Route path='edit/:emp_id' element={<Edit/>}/>
    </Routes>
    <Footer/>
   </Router>
  )
}

export default RootRouter