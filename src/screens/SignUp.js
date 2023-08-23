import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {LinkContainer} from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import img from '../assests/food.avif';
import '../global.css';

export default function SignUp() {
    const [credentials, setCredentials] = useState({name:"", email:"", password:"", location:""});
    let navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const response =await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type' :'application/json'
            },
            body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.location})
        })

        const json = await response.json();
        console.log(json);

        if(json.success) {
          navigate('/login');
        } else {
          alert('Enter valid credentials');
        }
    }

    const onChange = (event) => {
        setCredentials({...credentials, [event.target.name]:event.target.value})
    }

  return (
    <>
      <div className="container wrapper" >
        <div className="my-3" style={{display: "flex", flexDirection: "row"}}>
          <div className="my-3 d-none d-lg-flex"
            style={{flex: 1, display: "flex",alignItems: "center", justifyContent: "center"}}>
            <img
              src={img}
              alt="food"
              style={{
                width: "100%",
                objectFit: "cover",
                maxHeight: "70vh",
              }}
            />
          </div>
          <div className="container" style={{ flex: 1, padding: "2.5rem 1.25rem" }}>
    <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" name='name' value={credentials.name} onChange={onChange} />
        </Form.Group>

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

      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control type="text" placeholder="Enter your location" name='location' value={credentials.location} onChange={onChange} />
      </Form.Group>

      <div className="text-center">
        <Button className="btn-hover color mb-3" type="submit">
          Sign up
        </Button>
        </div>
        <h4 className="text-center">Already a user?</h4>
        <LinkContainer to="/login">
        <div className="text-center">
        <Button className="btn-hover color my-1">Login</Button>
        </div>
      </LinkContainer>
    </Form>
    </div>
      </div>
      </div>
    </>
  )
}

            
        
