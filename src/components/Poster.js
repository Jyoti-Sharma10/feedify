import React, { useEffect, useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useDispatchCart, useCart } from './ContextReducer';


export default function Poster(props) {

  let dispatch = useDispatchCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState('');
  let data = useCart();
  const priceRef = useRef();
  let foodItem = props.foodItem;

  const handleAddToCart = async () => {
    // Find an existing item in the cart with the same ID and size
    const existingItem = data.find(item => item.id === foodItem._id && item.size === size);
  
    if (existingItem) {
      // Update quantity and price of the existing item
      await dispatch({ type: "UPDATE", id: foodItem._id, price: finalPrice, qty: qty });
    } else {
      // Add a new item to the cart
      await dispatch({ type: "ADD", id: foodItem._id, name: foodItem.name, price: finalPrice, qty: qty, size: size, img: props.ImgSrc });
    }
  };
  

  let finalPrice = qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value)
  }, []);

  return (
    <div>
      <Card style={{ width: '18rem' , maxHeight:'360px' , margin: '6px'}}>
      <Card.Img variant="top" src={props.foodItem.img} style={{height:'150px', objectFit:'fill'}}/>
      <Card.Body>
        <Card.Title>{props.foodItem.name}</Card.Title>
        <div className="container w-100">
            <select className="m-2 h-100 bg-success text-white fs-5" onChange={(e)=> setQty(e.target.value)}>
                {Array.from(Array(6), (e,i) => {
                    return (
                        <option key={i+1} value={i+1}>{i+1}</option>
                    )
                })}
            </select>

            <select className='m-2 h-100 bg-success text-white fs-5' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                {priceOptions.map((data) => {
                  return <option key={data} value={data}>{data}</option>
                })}
            </select>
            <div className="d-inline h-100 fs-6">
            ₹{finalPrice}/-
            </div>
            <hr/>
            <button className='btn btn-success justify-center ms-2' onClick={handleAddToCart}>Add to Cart</button>

        </div>
      </Card.Body>
    </Card>
    </div>
  )
}
