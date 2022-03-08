import React from 'react'
import './About.scss'
import {Carousel,Container} from 'react-bootstrap'
import Footer from '../../Layout/Footer'

function About() {
  return (
    <div >
        
    
             <Carousel variant="dark" className="about_caro">
  <Carousel.Item>
    <img
      className="d-block about_caro"
      src="../../../../image/caro1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block about_caro"
      src="../../../../image/caro2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block about_caro"
      src="../../../../image/caro3.webp"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
<div className='myabout'>
<h1>About</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </div>
    <Footer />
    </div>
  )
}

export default About