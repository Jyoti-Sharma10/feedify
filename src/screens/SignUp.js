import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {LinkContainer} from 'react-router-bootstrap';

export default function SignUp() {
    const [credentials, setCredentials] = useState({name:"", email:"", password:"", location:""})

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

        if(!json.success) {
            alert('Enter valid credentials');
        }
    }

    const onChange = (event) => {
        setCredentials({...credentials, [event.target.name]:event.target.value})
    }

  return (
    <>
    <div className='container'>
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

      <Button variant="success m-3" type="submit">Submit</Button>

      <LinkContainer to='/login'>
      <Button variant="danger m-3">Existing user</Button>
      </LinkContainer>
    </Form>
    </div>
    </>
  )
}

            
        
