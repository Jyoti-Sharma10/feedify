import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Slider() {
  return (
    <div>
      <div id="carousel-inner" style={{objectFit: 'cover !important'}}>
      <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/?vegetables"
          alt="First slide"
        />
        <Carousel.Caption>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/?pizza"
          alt="Second slide"
        />
        <Carousel.Caption>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/?burger"
          alt="Third slide"
        />
        <Carousel.Caption>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  )
}
