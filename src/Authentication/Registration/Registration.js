import React from 'react'
import './Registration.scss'
import {Link} from 'react-router-dom';
import {useFormik} from 'formik'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Footer from '../../Layout/Footer'

function Registration() {
  const navigate=useNavigate();
  const  ValidateForm=(formvalue)=>{
    const errors={};
    const reg_exp_email=/^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$/
    const reg_exp_password=/^(?=.*?[A-Za-z])(?=.*?[!@#$%^&*])(?=.*?[0-9]).{4,10}$/

    if(!formvalue.username){
      errors.username="Please enter User Name";
  }else if(formvalue.username.length<4){
      errors.username="minlength 4";
  }
    if(!formvalue.email){
      errors.email="Please Enter Your Email ID"
    }else if(!reg_exp_email.test(formvalue.email)){
      errors.email="Invalid Email Id"
    }
    if(!formvalue.password){
      errors.password="Please Enter Password"
    }else if(!reg_exp_password.test(formvalue.password)){
      errors.password="A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required."
    }

    console.log("Errors : ",errors);
        return errors;
  }

  const formik=useFormik({
    initialValues:{
    username:'',
    email:'',
    password:''
    },

    validate:ValidateForm,

    onSubmit:(values)=>{

      console.log("recive value",values);

      axios.post('https://node-project-storage.herokuapp.com/postUserData',values)
        .then(res=>{
            console.log("Axios Response :",res.data);

            navigate('/login');
            alert("Successfully Registered")
        })
        .catch(err=>{
            console.log("Axios Error :",err);
        })
    }

  })
  return (
     <div className='reg_page'>
         <img src='../../../../image/back.jpg' width={1365} height={585} />
    
         <div className='reg'>
           <form className='regform' onSubmit={formik.handleSubmit}>
               <h1 className='reg_h1'>Registration</h1>
           <label>Name*</label><br />
        <input 
        type='text'
        name='username'
        placeholder='Enter Your Full Name'
        className='reg_input'
        value={formik.values.username}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} /><br />
        {formik.touched.username && formik.errors.username ? (<span className='reg_err'>{formik.errors.username}</span>) : null}
        <br />

        <label>Email ID*</label><br />
        <input
        type='email'
        name='email'
        placeholder='Enter Email ID'
        className='reg_input'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/><br />
        {formik.touched.email && formik.errors.email ? (<span className='reg_err'>{formik.errors.email}</span>): null}<br />

        <label>Password*</label><br />
        <input
        type='text'
        name='password'
        placeholder='Password' 
        className='reg_input'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/><br />
        {formik.touched.password && formik.errors.password ? (<span className='reg_err'>{formik.errors.password}</span>) : null}<br />
        
        <button type='submit' className='reg_butn' disabled={!formik.isValid && formik.dirty}>Submit</button><br />
        <p className='reg_p'>
            <Link to='/login' className='reg_link'>Already have an account? Login here</Link>
        </p>
        </form>
    </div>
    <Footer />
    </div>
   
  )
}

export default Registration