import React from 'react'
import {Carousel,Container,Row,Col, Button} from 'react-bootstrap'
import './Home.scss'
import {  useNavigate } from 'react-router-dom'
import Footer from '../../Layout/Footer'


function Home() {
  const navigate=useNavigate();
  const Navi_appli=()=>{
  navigate('/registration')
  };
  const Navi_about=()=>{
    navigate('/about')
  };
  return (
    <div className='myhome'>
      <div>
   
        <img src='../../../../image/home1.jpg' alt='home' className='w-100' height={400}/>
    
      <div className='home_text1'>
        <h4 className='home_text2'>Welcome to Medical Hospital</h4>
        <h1>Your Health Care</h1>
        <h1>Center</h1>
        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h6><br />
        <Button onClick={Navi_appli}>
          Make An Appointment
        </Button>
      </div><br />
      </div>
      <Container className='home_cont1'>
  <Row>
    <Col>
    <Carousel variant="dark" className="caro">
  <Carousel.Item>
    <img
      className="d-block home_caro"
      src="../../../../image/caro1.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block home_caro"
      src="../../../../image/caro2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block home_caro"
      src="../../../../image/caro3.webp"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</Col>
<Col>
<h3>
Why Choose Health Care With
</h3>
<h3 className='home_text2'> Medical Hospital</h3>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
</p>
</Col>
  </Row>
  </Container>

  <Container className='home_cont2'>
  <Row>
<Col>
<h3>
About Us
</h3>
<p>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
</p><br/>
<Button onClick={Navi_about}>Find Out More</Button>
</Col>
<Col>
{/* <img src='../../../../image/doctor4.jpg' width={460}/> */}
<Carousel variant="dark" className="caro">
  <Carousel.Item>
    <img
      className="d-block home_caro"
      src="../../../../image/Dr-K.C-Das.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block home_caro"
      src="../../../../image/doctor2.jpg"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block home_caro"
      src="../../../../image/doctor3.jpeg"
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block home_caro"
      src="../../../../image/doctor4.jpg"
      alt="Forth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block home_caro"
      src="../../../../image/doctor5.jpg"
      alt="Fifth slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block home_caro"
      src="../../../../image/doctor6.jpg"
      alt="Sixth slide"
    />
  </Carousel.Item>
</Carousel>
</Col>
  </Row>
  </Container><br/>

<Container className='home_icon'> 
<Row className="my_foll">
  <h2 className='home_foll_text'>Follow Us</h2>
    <Col  className='home_icon_face'><i class="fa fa-facebook-square" aria-hidden="true"></i></Col>
    <Col  className='home_icon_insta'><i class="fa fa-instagram" aria-hidden="true"></i></Col>
    <Col  className='home_icon_twitter'><i class="fa fa-twitter" aria-hidden="true"></i></Col>
    <Col  className='home_icon_linkedin'><i class="fa fa-linkedin" aria-hidden="true"></i></Col>
  </Row>
</Container><br/>

  <Footer />
    </div>
  )
}

export default Home