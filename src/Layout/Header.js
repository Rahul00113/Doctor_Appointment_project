import React from 'react'
import {Navbar,Container,Nav,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Header.scss'
import { useNavigate } from 'react-router-dom';




const Header = () => {
 
  const navigate=useNavigate();
  const loggingOut=()=>{
    window.localStorage.clear();
    navigate('/')
  }
  const isAuth=window.localStorage.getItem('TokenValue');

  return (
    <div className="mynav">
    <Navbar sticky="top" bg="primary"  >
    <Container>
    <Navbar.Brand as={Link} to="/"><img src='../../../image/logo4.jpg' alt='logo' className='header_logo'/></Navbar.Brand>
    <Nav >
      <Nav.Link as={Link} to="/">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/find_doc">Find a Doctor</Nav.Link>
      {/* <Nav.Link as={Link} to="/appointments">Appointment</Nav.Link> */}

       <> 
      {
        isAuth ?
         <Button type='Submit' onClick={loggingOut} className='butn2'>Logout</Button> 
       
        :
        <>
      <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
      <Nav.Link as={Link} to="/login">Login</Nav.Link>
      </>
         }
       </> 
    
     
    </Nav>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header