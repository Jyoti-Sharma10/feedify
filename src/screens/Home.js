import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Poster from '../components/Poster'
import Slideshow from '../components/Slider'

export default function Home() {
  return (
    <div>
      <div><Header/></div>
      <div><Slideshow/></div>
      <div>
        <Poster />
        <Poster/>
        <Poster/>
        <Poster/>
        <Poster/>
      </div>
      <div><Footer/></div>
    </div>
  )
}
