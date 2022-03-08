import  React from 'react';
import { Container,Button} from 'react-bootstrap';
import docData from'../Doctors.json';
import Footer from '../../Layout/Footer';
import {useFormik} from 'formik'
import { useNavigate, useParams } from 'react-router-dom'
import './Appointment.scss'




function Appointment() {

  const navigate=useNavigate();
    let value=useParams();
    console.log("Details:",value);
    
    let doctorName=docData.Doctor.find((data)=>data.sd_id===value.sid);
    console.log("Doctor Name:",doctorName);


    const ValidateForm = (formValue) =>{
    const errors={};
    const reg_exp_email=/^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$/
    const reg_exp_phone =/^([6-9]{1})([0-9]{9})$/

    if(!formValue.username){
        errors.username="Please enter User Name";
    }else if(formValue.username.length<4){
        errors.username="minlength 4";
    }
    if(!formValue.address){
        errors.address="Please enter address";
    }else if(formValue.address.length<5){
        errors.address="address required";
    }
    if(!formValue.phone){
        errors.phone="Please enter phone";
    }else if(!reg_exp_phone.test(formValue.phone)){
        errors.phone="Phone number are required."
    }
    if(!formValue.email){
        errors.email="Please enter email";
    }else if(!reg_exp_email.test(formValue.email)){
        errors.email="Invalid email";
    }
   
    if(!formValue.date){
        errors.date="Please Chouse date";
    }else if(formValue.date.length<0){
        errors.date="Please Chouse date";
    }
    if(!formValue.time){
        errors.time="Please Chouse time";
    }else if(formValue.time.length<0){
        errors.time="Please Chouse time";
    }

    console.log("Errors : ",errors);
    return errors;
}


const formik=useFormik({
    initialValues:{
        username: '',
        address: '',
        phone: '',
        email: '',
        date:'',
        time:''
},
validate:ValidateForm,
onSubmit:(values)=>{

    console.log("recived value:",values);
    alert('Appoinment Successful')
    navigate('/')
}})

  return (

<div className='appoin_back'>

<Container className="appoint">
  <h2 className='appoin_head'>Appointment</h2>
  <form onSubmit={formik.handleSubmit} >

  <label   className='appoin_lab'  >Name :</label><br/>
  <input   className='appoin_inbox' 
  name='username'
  type='text'
  placeholder='Enter Full Name'
value={formik.values.username} 
onChange={formik.handleChange}
onBlur={formik.handleBlur}
  /><br/>
{formik.touched.username && formik.errors.username ?
 (<span  style={{color: "red"}}>{formik.errors.username}</span>) : null}
    <br />


  <label   className='appoin_lab'  >Address :</label><br/>
  <input   className='appoin_inbox' 
  name='address'
  type='text'
value={formik.values.address} 
onChange={formik.handleChange}
onBlur={formik.handleBlur}
  /><br/>
{formik.touched.address && formik.errors.address ?
 (<span  style={{color: "red"}}
>{formik.errors.address}</span>) : null}
    <br />

 
  <label   className='appoin_lab'  >Phone Number :</label><br/>
  <input   className='appoin_inbox' 
  name='phone'
  type='text'
  placeholder='Phone Number'
value={formik.values.phone} 
onChange={formik.handleChange}
onBlur={formik.handleBlur}
  /><br/>
{formik.touched.phone && formik.errors.phone ?
 (<span  style={{color: "red"}}
>{formik.errors.phone}</span>) : null}
    <br />


  <label   className='appoin_lab'  >Email Id :</label><br/>
  <input   className='appoin_inbox' 
  name='email'
  type='email'
  placeholder='Enter Email Id'
value={formik.values.email} 
onChange={formik.handleChange}
onBlur={formik.handleBlur}
  /><br/>
{formik.touched.email && formik.errors.email ?
 (<span  style={{color: "red"}}
>{formik.errors.email}</span>) : null}
    <br />

  <label   className='appoin_lab'  >Dr.Name : </label><br/>
  <input   className='appoin_inbox' 
  name='docname'
  type='text'
  value={doctorName.doc_name}
  readonly
  />
<br/>
 

  <div className='date_time'>

    <div className='appoin_date'>
  <label   className='appoin_lab'  >Date :</label><br/>
  <input 
  name='date'
  type='date'
value={formik.values.date} 
onChange={formik.handleChange}
onBlur={formik.handleBlur}
  /><br/>
{formik.touched.date && formik.errors.date ?
 (<span  style={{color: "red"}}
>{formik.errors.date}</span>) : null}
    <br />

 </div>

  <div className='appoin_time'>
  <label   className='appoin_lab'  >Time :</label><br/>
  <select 
  name="time" id="time" 
  className='appoin_sel' 
value={formik.values.time} 
onChange={formik.handleChange}
onBlur={formik.handleBlur}
 >
  <option value="8am-10am">8am-10am</option>
  <option value="12pm-2pm">12pm-2pm</option>
  <option value="3pm-4pm">3pm-4pm</option>
  <option value="6pm-8pm">6pm-8pm</option>
</select><br/>
{formik.touched.time && formik.errors.time ? 
(<span  style={{color: "red"}}
>{formik.errors.time}</span>) : null}
    <br />

</div>

</div><br/><br/>

<Button
 type='submit' 
 className='appoin_butn'
 disabled={!(formik.isValid && formik.dirty)}>
     Submit
 </Button>
  </form>
  
  </Container><br/>
 
  <Footer />
</div>
  )
}

export default Appointment