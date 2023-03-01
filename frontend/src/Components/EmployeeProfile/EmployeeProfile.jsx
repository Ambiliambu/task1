import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useParams } from 'react-router-dom';
import './EmployeeProfile.css'

const EmployeeProfile = () => {


const [detail,setDetail]=useState([])

const Id=useParams()

useEffect(()=>{
    (async function(){
      try{
        const config = {
          headers: {
              "Content-type": "application/json",

          }
      }
      const {data} = await axios.get(`/getemployeeall/${Id.id}`,config);
      setDetail(data)
    
      }catch(error){

      }
    })();

  },[])


  return (
    <div>
      <Row>
        <Col className='col-3 mt-4  '>
            <Image src='https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg' fluid alt='image'/>
         
        </Col>
        <Col className='mt-5 col-9 ' >
        <ListGroup>
   
      <ListGroup.Item>Name:{detail.name}</ListGroup.Item>
      <ListGroup.Item>Designation:{detail.designation}</ListGroup.Item>
      <ListGroup.Item>Phone Number:{detail.phone}</ListGroup.Item>
      <ListGroup.Item>Email Address:{detail.email} </ListGroup.Item>
      <ListGroup.Item>Address:{detail.address} </ListGroup.Item>
     </ListGroup>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Col>
      <ListGroup>
      <ListGroup.Item>Employment History:{detail.experiences}</ListGroup.Item>
      <ListGroup.Item>Educational qualifications:{detail.qualifications} </ListGroup.Item>
      <ListGroup.Item>Skills: {detail.skills}</ListGroup.Item>
      <ListGroup.Item>Hobbies:{detail.hobbies}</ListGroup.Item>
      </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default EmployeeProfile
