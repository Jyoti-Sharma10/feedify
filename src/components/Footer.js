import React from "react";
import img from "../assests/app.jpg";
import { Link } from 'react-router-dom';
import '../global.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container my-2 footer-content">
        <div className="footer-column">
          <img
            src={img}
            alt="girl"
            className="footer-image"
          />
        </div>
        <div className="footer-column">
          <p><b>Contact us</b></p>
          <p>Address : New Delhi</p>
          <p>Contact : +91 7777777777</p>
        </div>
        <div className="footer-column">
          <p><b>Quick Links</b></p>
          <Link to="/" className="footer-link">My Diary</Link><br />
          <Link to="/" className="footer-link">Home</Link><br />
          <Link to="/" className="footer-link">About</Link><br />
        </div>
      </div>
      <div className="text-center footer-icons">
        <Link to="/" className="icon-link"> <i className="fa-brands fa-facebook"></i></Link>
        <Link to="/" className="icon-link"> <i className="fa-brands fa-instagram"></i></Link>
        <Link to="/" className="icon-link"> <i className="fa-brands fa-linkedin"></i></Link>
        <Link to="/" className="icon-link"> <i className="fa-brands fa-youtube"></i></Link>
      </div>
      <hr></hr>
      <div class="text-center">
      <Link to="/" className="footer-link mx-4">Privacy policy</Link>
      <Link to="/" className="footer-link mx-4">Terms and conditions</Link>
      <Link to="/" className="footer-link mx-4">Security Information</Link>
      </div>
    </div>
  );
}
