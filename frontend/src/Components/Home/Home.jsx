import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const[details,setDetails]=useState([])

 const navigate=useNavigate()

  useEffect(()=>{
    (async function(){
      try{
        const config = {
          headers: {
              "Content-type": "application/json",
          }
      }
      const {data} = await axios.get('/getemployees',config);
      setDetails(data)
      }catch(error){

      }
    })();

  },[])


const handleClick=(Id)=>{
navigate(`/profile/${Id}`)
}

  return (
    <div className='mt-5'>
        <h4>Employees List</h4>
          <Table  bordered hover size="sm">
      <thead>
        <tr>
          <th>Sl. No.</th>
          <th>Name</th>
          <th>Job</th>
          <th>Contact Informations</th>
        </tr>
      </thead>
      <tbody>
            {details.map((obj,index)=>
        <tr key={index}>
        <td>{index+1}</td>
        <td onClick={()=>{handleClick(obj._id)}}>{obj.name}</td>
        <td>{obj.designation}</td>
        <td>{obj.address}
        <br/>
              {obj.phone}
              <br/>
              {obj.email}</td>
        </tr>
            )}
         
      </tbody>
    </Table>
    </div>
  )
}

export default Home
