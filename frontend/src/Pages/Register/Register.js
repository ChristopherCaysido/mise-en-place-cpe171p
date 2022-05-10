import {Container,Row, Col, Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../Components/NavBar/NavigationBar';
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react' // Check
import { useSelector, useDispatch } from 'react-redux' //
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {register, reset} from '../../features/auth/authSlice'
import './Register.css';
import Spinner from '../../Components/Spinner/Spinner'

const Register = () => {
    const [FormData,setFormData] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    })

    const {name, email, password, password2} = FormData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess || user){
            navigate('/')
        }
        dispatch(reset())
    }, [user, isError,isSuccess,message,navigate,dispatch])
    
    
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]:e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2){
            toast.error('Passwords do not match')
        } else {
            const userData = {
                name,
                email,
                password,
            }

            dispatch(register(userData))
        }
    }
    if (isLoading) {
        return <Spinner />
    }
    
    return (
        <div>
            <Navbar />
            <div className='registerSpace'>
            <Container className='mt-5 border p-5 position-absolute top-50 start-50 translate-middle'>
            <Row>
                <Col className="text-center">
                    <Form onSubmit={onSubmit}>
                    <Form.Text className="text-danger">
                    Sign up to Mise En Place
                    </Form.Text>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control 
                            name='name'
                            type="text" 
                            placeholder="Full Name" 
                            value={name}
                            onChange={onChange} />
                            
                        </Form.Group>

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

                        <Form.Group className="mb-3" controlId="formBasicPassword2">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control 
                            type="password"
                            name='password2' 
                            placeholder="Confirm Password" 
                            value={password2}
                            onChange={onChange}/>
                        </Form.Group>


                        <Button variant="primary col-12" type="submit">Register </Button>
                        <div>
                           <small>Already Have An Account? Log In <Link to='/login'>Here</Link></small> 
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

  
    

export default Register