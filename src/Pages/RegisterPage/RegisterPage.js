import React from 'react'
import '../RegisterPage/Registerpage.css'
import Register from '../../Components/Register/Register'
import doctor from '../../Assets/Images/veterinary-doctor.png'
const RegisterPage = () => {
  return(<div className='register-page' >
<div className="layout-container">
  <div className="image-container">
    <img src={doctor} alt="" className='doctor-image' />
  </div>
  <div className="register-container"><Register></Register></div>
</div>
</div>)
}

export default RegisterPage
