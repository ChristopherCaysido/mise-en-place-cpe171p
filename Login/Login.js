import React from 'react'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';



const Login = () => {
  return (

        <Container className='mt-5' class="border p-5 position-absolute top-50 start-50 translate-middle">
            <Row>
                <Col className="text-center">
                    <Form>
                    <Form.Text className="text-danger">
                    Login to your mise en place account!
                    </Form.Text>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address/Username</Form.Label>
                            <Form.Control type="email" placeholder="Enter email or username" />
                            <Form.Text className="text-muted">
                            
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Remember Password" />
                        </Form.Group>

                        <Button variant="primary col-12" type="submit">Login </Button>
                        <div>
                            <a href="#"><small className="">Forgot your password?</small></a>
                        </div>
                    </Form>
                </Col>  
            </Row>
        </Container>
  )
}

export default Login