import React, { useState } from 'react'
import RegisterService from '../../Services/RegisterService';
import '../Register/Register.css'
const Register = () => {
  const [details,setDetails]=useState({username:"",email:"",password:""});

  const handleChange=(event)=>{
    const {name,value}=event.target;
    setDetails((prev)=>{return {...prev,[name]:value}})};

  const handleSubmit= async (event)=>{
    event.preventDefault();
    try {
        const response=await RegisterService(details);
        console.log(response.data);
    } catch (error) {
        console.log(error.response.data)
    }
  };
  return(<div className='form-container' >

<div className='input-field-container'>
  <input className='input-field' type="text" name="username" id="username" value={details.username} onChange={handleChange} placeholder='UserName'/>
</div>

<div className='input-field-container'>
  <input className='input-field' type="text" name="email" id="email" value={details.email} onChange={handleChange} placeholder='email'/>
</div>

<div className='input-field-container'>
  <input  className='input-field' type="password" name="password" id="password" value={details.password} onChange={handleChange} placeholder='password'/>
</div>

<div className='input-field-container'>
  <input className='register' type="submit" name="username" id="username" value="Register" />
</div>

       </div>)
}

export default Register
