import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../Components/NavBar/NavigationBar';
import './Login.css';



const Login = () => {
    const [FormData,setFormData] = useState({
        email:'',
        password:'',
    })

    const {email, password} = FormData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
    }
  
    return (
        <div>
            <Navbar />
            <div className='loginSpace'>
            <Container className='mt-5 border p-5 position-absolute top-50 start-50 translate-middle'>
            <Row>
                <Col className="text-center">
                    <Form>
                    <Form.Text className="text-danger">
                    Login to your mise en place account!
                    </Form.Text>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control 
                            type="email" 
                            name='email'
                            placeholder="Enter email" 
                            value={email}
                            onChange={onChange}
                            />
                            <Form.Text className="text-muted">
                            
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Enter Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            name='password'
                            placeholder="Password" 
                            value={password}
                            onChange={onChange}/>
                        </Form.Group>

                        <Button variant="primary col-12" type="submit" onSubmit={onSubmit}>Login </Button>
                        <div>
                            <small className="">Don't Have an Account? Sign Up <Link to='/Register'>Here</Link></small>
                        </div>
                    </Form>
                </Col>  
            </Row>
        </Container>
            </div>
            
        <div className='addtlSpace'></div>
        </div>
        
  )
}

export default Login