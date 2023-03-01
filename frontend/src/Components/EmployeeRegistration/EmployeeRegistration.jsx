import React, { useState } from 'react'
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const EmployeeRegistration = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }, } = useForm();

        const navigate=useNavigate()

        const [experiences,setExperiences]=useState([]);
        const [experience,setExperience]=useState('')
   
        const [qualifications,setQualifications]=useState([]);
        const [qualification,setQualification]=useState('')
   
        const [skills,setSkills]=useState([]);
        const [skill,setSkill]=useState('')
   
        const [hobbies,setHobbies]=useState([]);
        const [hobby,setHobby]=useState('')

     const onSubmit=(data)=>{
     const datas={
      name:data.name,
      designation:data.designation,
      email:data.email,
      address:data.address,
      phone:data.phone,
      experiences:experiences,
      qualifications:qualifications,
      skills:skills,
      hobbies:hobbies
     }
     console.log("kk",datas);

     (async function (){
      try {
              const config = {
                headers: {
                  "Content-type": "application/json",
      
                }
              }            
         console.log("oooo" );
           
              const {data}=await axios.post('/addemployee',
              datas
              )
            }catch(error){
                  console.error(error.message)
            }
    })();

  alert("Successfully Submitted")
  
    }  
   

  return (
    <div>
        <Container className='mt-4'>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
          <div className="border border-2 border-primary"></div>
            <Card className="shadow px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">Employee Registration</h2>
                  <div className="mb-3">
                  <Form className='mt-5' onSubmit={handleSubmit(onSubmit)}>

                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="Name">
                        
                        <Form.Control type="text" placeholder=" Name" name='name'
                {...register('name', {required:{value:true,message:"Name is required"},
                  minLength: { value: 3, message: "Enter the valid name" },
                  pattern: { value: /^[a-zA-Z '.-]*$/, message: "Enter valid name" }

                })}
                        
                        
                        />
                        <p style={{ color: "crimson" }}>{errors.name?.message}</p>
                      </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group
                        className="mb-3"
                        controlId="Designation"
                      >
                       
                        <Form.Control type="text" placeholder="Designation" name='designation'
                         {...register('designation', {required:{value:true,message:"Designation is required"},
                         minLength: { value: 3, message: "Enter the valid designation" },
                         pattern: { value: /^[a-zA-Z '.-]*$/, message: "Enter valid designation" }
       
                       })}
                       />
                        <p style={{ color: "crimson" }}>{errors.designation?.message}</p>

                      </Form.Group>

                        </Col>
                       
                    </Row>

                     <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="Email">
                     
                        <Form.Control type="email" placeholder="Email" name='email'
                         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                         {...register('email', {required:{value:true,message:"Email is required"},
                          
                         })}/>
                         <p style={{ color: "crimson" }}>{errors.email?.message}</p>
                      </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group
                        className="mb-3"
                        controlId="PhoneNumber"
                      >
                        
                        <Form.Control type="text" placeholder="Phone Number" name='phone'
                           {...register('phone', {required:{value:true,message:"Phone Number is required"},
                           maxLength: { value: 10, message: "Enter the valid Phone number " },
                           minLength: { value: 10, message: "Enter the valid Phone number " },
                           pattern: { value: /^[0-9+-]+$/, message: "Enter valid Phone number " }
         
                         })} />
                         <p style={{ color: "crimson" }}>{errors.phone?.message}</p>
                      </Form.Group>
                        </Col>
                     </Row>
                     <Form.Group
                        className="mb-3"
                        controlId="Address"
                      >
                        
                        <Form.Control type="text" placeholder="Address" name='address'
                         {...register('address', {required:{value:true,message:"Address is required"},
                       
       
                       })} />
                       <p style={{ color: "crimson" }}>{errors.address?.message}</p>
                      </Form.Group>

                      <Row>
                        <Col md={9}>
                        <Form.Control  
      value={experience} onChange={(e)=>{setExperience(e.target.value)} }
       type="text" placeholder="Enter the experiences or projects" name='experiences'
   
     />
                        </Col>
                        <Col md={3}>
                        <Button 
     onClick={
            ()=>{setExperiences([...experiences,experience]) 
             setExperience('')
          }
            
            }
              className=""  >+</Button>
                        </Col>
                        <p style={{ color: "crimson" }}>{experiences.length ===0 && `Field is requires`}</p>
                      </Row>


                      <Row>
                        <Col md={9}>
                        <Form.Control  
      value={qualification} onChange={(e)=>{setQualification(e.target.value)} }
       type="text" placeholder="Enter the qualifications" name='qualifications' 
      />
                        </Col>
                        <Col md={3}>
                        <Button 
     onClick={
            ()=>{setQualifications([...qualifications,qualification]) 
         
             setQualification('')
          }
            
            }
              className=""  >+</Button>
                        </Col>
                        <p style={{ color: "crimson" }}>{qualifications.length === 0 && `Field is requires`}</p>
                      </Row>
    
                      <Row>
                        <Col md={9}>
                        <Form.Control  
      value={skill} onChange={(e)=>{setSkill(e.target.value)} }
       type="text" placeholder="Enter the Skills" name='skills' 
     />
                        </Col>
                        <Col md={3}>
                        <Button 
     onClick={
            ()=>{setSkills([...skills,skill]) 
         
             setSkill('')
          }
            
            }
              className=""  >+</Button>
                        </Col>
                        <p style={{ color: "crimson" }}>{skills.length === 0 && `Field is requires`}</p>
                      </Row>

                      <Row>
                        <Col md={9}>
                        <Form.Control  
      value={hobby} onChange={(e)=>{setHobby(e.target.value)} }
       type="text" placeholder="Enter the Hobbies" name='hobbies' 
     />
                        </Col>
                        <Col md={3}>
                        <Button 
     onClick={
            ()=>{setHobbies([...hobbies,hobby]) 
         
             setHobby('')
          }
            
            }
              className=""  >+</Button>
                        </Col>
                        <p style={{ color: "crimson" }}>{hobbies.length === 0 && `Field is requires`}</p>
                      </Row>
    
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

export default EmployeeRegistration
