import React from 'react'
import './Login.scss'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Footer from '../../Layout/Footer'

function Login() {
  const navigate=useNavigate();
  const  ValidateForm=(formvalue)=>{
    const errors={};
    const reg_exp_email=/^([a-z0-9.-]+)@([a-z]{5,12}).([a-z.]{2,10})$/
    const reg_exp_password=/^(?=.*?[A-Za-z])(?=.*?[!@#$%^&*])(?=.*?[0-9]).{4,10}$/

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
    email:'',
    password:''
    },

    validate:ValidateForm,

    onSubmit:(values)=>{

      console.log("recive value",values);

      axios.post('https://node-project-storage.herokuapp.com/postLoginData',values)
  .then(res=>{
      console.log("Axios Response :",res.data);

      window.localStorage.setItem("TokenValue",res.data.token);
      alert("You have Succesfully logged in");
      navigate('/find_doc');
  })
  .catch(err=>{
      console.log("Axios Error :",err);
  })
}
  })

  return (
     <div className='reg_page'>
         <img src='../../../../image/back.jpg' alt='background img' width={1365} height={585} />
    
         <div className='log'>
           <form className='logform' onSubmit={formik.handleSubmit}>
               <h1 className='log_h1'>Login</h1><br/><br/>

        <label>Email ID*</label><br />
        <input
        type='email'
        name='email'
        placeholder='Enter Email ID'
        className='log_input'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}/><br />
        {formik.touched.email && formik.errors.email ?(<span className='log_err'>{formik.errors.email}</span>) : null}<br />

        <label>Password*</label><br />
        <input
        type='text'
        name='password'
        placeholder='Password'
        className='log_input'
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} /><br />
        {formik.touched.password && formik.errors.password ? (<span className='log_err'>{formik.errors.password}</span>) : null}<br />

        <button type='submit' className='log_butn' disabled={!formik.isValid && formik.dirty}>Submit</button><br />
        <p className='log_p'>
            <Link to='/registration' className='log_link'>Create an account</Link>
        </p>
        </form>
    </div>
    <Footer />
    </div>
   
  );
}

export default Login