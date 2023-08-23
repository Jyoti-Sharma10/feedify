import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {LinkContainer} from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../assests/log.jpg';

export default function Login() {
  const [credentials, setCredentials] = useState({email:"", password:""});
  let navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:credentials.email, password:credentials.password})
        })

        const json = await response.json();
        console.log(json);

        if(json.success) {
          localStorage.setItem('authToken', json.authToken);
          localStorage.setItem('userEmail', credentials.email);
          navigate('/');
        } else {
            alert('Enter valid credentials');
        }
    }

    const onChange = (event) => {
        setCredentials({...credentials, [event.target.name]:event.target.value})
    }

  return (
    <>
    <div className='container wrapper'>
    <div className="my-3" style={{display: "flex", flexDirection: "row"}}>
      <div className="my-3 d-none d-lg-flex" style={{flex: '1', display: "flex",alignItems: "center", justifyContent: "center"}}>
      <img
          src={img} 
          style={{
            width: '100%',
            objectFit: 'cover',
            maxHeight: '69vh',
          }}
          alt="Journal Background" 
        />
      </div>
    
    <div className="container" style={{ flex: 1, padding: "2.5rem 1.25rem" }}>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name='email' value={credentials.email} onChange={onChange} />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password' value={credentials.password} onChange={onChange} />
      </Form.Group>

      <div style={{textAlign: 'center'}}>
      <Button className="btn-hover color" type="submit">Login</Button>
      </div>
      <br></br>

      <h4 className='text-center'>New to My Feedify? Sign up to login</h4>
      <LinkContainer to='/createuser'>
    <div className="text-center"> 
      <Button className="btn-hover color" type="submit">
        Create Account
      </Button>
    </div>
  </LinkContainer>
      
    </Form>
    </div>
    </div>
    </div>
    </>
  )
}
