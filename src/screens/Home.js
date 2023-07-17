import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Poster from '../components/Poster';
import Carousel from 'react-bootstrap/Carousel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


export default function Home() {

  const carouselImageStyle = {
    objectFit: "cover",
    margin: "auto",
    maxHeight: "80vh",
    filter: "brightness(30%)",
  };
  

  const[foodCat, setFoodCat] = useState([]);
  const[foodItem, setFoodItem] = useState([]);
  const[search, setSearch] = useState('');

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodData',{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      }
    });

    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  }

  useEffect(() => {
    loadData()
  }, []);

  


  return (
    <div>
    <div><Header/></div>
    <div>
    <div style={{ minWidth: "100vw", position: "relative" }}>
  <div style={{ width: "60%", margin: "0 auto" }}>
    <div id="carousel-inner">
      <Carousel fade>
        <Carousel.Item>
          <img
            style={carouselImageStyle}
            className="d-block w-100"
            src="https://source.unsplash.com/random/?Muffins"
            alt="First slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={carouselImageStyle}
            className="d-block w-100"
            src="https://source.unsplash.com/random/?Spaghetti"
            alt="Second slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={carouselImageStyle}
            className="d-block w-100"
            src="https://source.unsplash.com/random/?burger"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
        <div className="d-flex justify-content-center mb-3" style={{ position: "absolute", zIndex: "2", bottom: "0", width: "60%", margin: "0 auto"}}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={search}
            onChange={(e) => {setSearch(e.target.value)}}
          />
          <Button variant="outline-success">Search</Button>
        </div>
    </div>
  </div>
</div>
    </div>


      <div className='container'>
        {
          foodCat !== [] ? foodCat.map((data) => {
            return(
              <div className='row mb-3'>
              <div key={data._id} className='fs-3 m-3'> 
                {data.CategoryName} </div>
                <hr/>
                {
                  foodItem !== [] ? foodItem.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLocaleLowerCase())) )
                  .map( filterItems => {
                    return (
                      <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                        <Poster foodItem = {filterItems}
                        options = {filterItems.options[0]}></Poster>
                        </div>
                    )
                  }) : <div> No such data found </div>
                }
              </div>

            ) 
          }) : ""
        }
      </div>
      <div><Footer/></div>
    </div>
  )
}
