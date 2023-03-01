import axios from 'axios';
import React from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {

  const navigate=useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }, } = useForm();

     const onSubmit=(datas)=>{
      (async function (){
        try {
                const config = {
                  headers: {
                    "Content-type": "application/json",
        
                  }
                }            
             
                const {data}=await axios.post('/adminlogin',
                datas
                )
              }catch(error){
                    console.error(error.message)
              }
      })();
  
  
  navigate('/registration')
       
     } 
     
  return (
    <div>
      <Container className=''>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Admin Login</h2>
                  <div className="mb-3">
                  <Form className='mt-3' onSubmit={handleSubmit(onSubmit)}>

                    
                        <Form.Group className="mb-3" controlId="Email">
                     
                        <Form.Control type="email" placeholder="Email" name='email'
                         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                         {...register('email', {required:{value:true,message:"Email is required"},
                          
                         })}/>
                         <p style={{ color: "crimson" }}>{errors.email?.message}</p>
         
                    
                        </Form.Group>
                        <Form.Group
                        className="mb-3"
                        controlId="Designation"
                      >
                       
                        <Form.Control type="text" placeholder="Password" name='password'
                         {...register('password', { required: {value:true,message:"Password is required"},
                         minLength:{value:3,message:"Password must be at least 3 character"},
                         maxLength:{value:6,message:"Password cannot exceed more than 6 character"},
                         })}
                       />
                        <p style={{ color: "crimson" }}>{errors.password?.message}</p>

                      </Form.Group>



                        

                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </div>
                    </Form>
                   
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AdminLogin
