import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Slider() {
  return (
    <div style={{ minWidth: "100vw" }}>
      <div style={{ width: "60%", margin: "0 auto" }}>
        <div id="carousel-inner">
       <Carousel fade>
       <Carousel.Item>
            <img style={{objectFit: "cover !important",
                  margin: "auto",
                  maxHeight: "80vh"}}
            className="d-block w-100"
            src="https://source.unsplash.com/random/?Muffins"
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
        <img style={{objectFit: "cover !important",
                  margin: "auto",
                  maxHeight: "80vh"}}
          className="d-block w-100"
          src="https://source.unsplash.com/random/?Spaghetti"
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
        <img style={{objectFit: "cover !important",
                  margin: "auto",
                  maxHeight: "80vh"}}
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
    </div>
  )
}

