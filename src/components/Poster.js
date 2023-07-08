import React from 'react';
import Card from 'react-bootstrap/Card';

export default function Poster() {
  return (
    <div>
      <Card style={{ width: '18rem' , maxHeight:'360px' , margin: '6px'}}>
      <Card.Img variant="top" src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuZWVyJTIwdGlra2F8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className="container w-100">
            <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e,i) => {
                    return (
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })}
            </select>

            <select className='m-2 h-100 bg-success rounded'>
                <option value="half">Half</option>
                <option value="full">Full</option>
            </select>
            <div className="d-inline h-100 fs-5">
              Total Price
            </div>
        </div>
      </Card.Body>
    </Card>
    </div>
  )
}
