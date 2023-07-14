import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {LinkContainer} from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';

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
    <div className='container'>
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

      <Button variant="success m-3" type="submit">Submit</Button>

      <LinkContainer to='/createuser'>
      <Button variant="danger m-3">New User</Button>
      </LinkContainer>
    </Form>
    </div>
    </>
  )
}
