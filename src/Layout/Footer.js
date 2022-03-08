import React from 'react'
import { Button,Container } from 'react-bootstrap'
import './Footer.scss'
import { useNavigate } from 'react-router-dom'


function Footer() {
  const navigate=useNavigate();
  const Navi_appli=()=>{
  navigate('/registration')
  };
  

  return (
    <div className='myfooter'>
<Container>
<footer className="page-footer font-small blue pt-4 ">

 
  <div >

    
    <div className="row">

     
      <div className="col foot_img ">
      <img src='../../../image/logo4.jpg' alt='logo' height={110} /><br/> <br/>
      <p className='foot_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

  
      </div>
    

      <hr className="clearfix w-100 d-md-none pb-4" />

      <div className="col mb-md-0 mb-4 ">

      
      <h6 className="text-uppercase">About Us</h6>
        <p className='foot_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      </div>
   
      <div className="col mb-md-0 mb-4 myfot_text">

      
      <h6 className="text-uppercase">Contact Info</h6>
      <h6><i class="fa fa-map-marker" aria-hidden="true"></i> location</h6>
        <p className='foot_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p className='foot_p'><i class="fa fa-phone" aria-hidden="true"></i>  +91-9988776655</p>
        <p className='foot_p'><i class="fa fa-envelope" aria-hidden="true"></i>  admin@gmail.com</p>


      </div>

      <div className="col mb-md-0 mb-4 ">

      
        <h6 className="text-uppercase">Appointment</h6>

        <ul className="list-unstyled">
          <li>
            <p className='foot_p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </li><br />
          <li>
            <Button onClick={Navi_appli} className='butn1'>Make An Appointment</Button>
     
          </li><br/>
         
        </ul>

      </div>
   
   

    </div>
 

  </div>



  <div className="footer-copyright text-center py-3 myfot_text">© 2020 Copyright:
    <a href='/' > Medical Hospital</a>
  </div>


</footer>
</Container>
    </div>
  )
}

export default Footer