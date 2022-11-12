import React from 'react'
import {useNavigate } from 'react-router-dom'
const LoginRegister = (props) => {
  const navigate = useNavigate()
  const goToregister =()=>{
    navigate('/Authentication/Register');
  } 
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
        {
          props.compType === 'login'?
        <div className='col-10 col-sm-8 col-md-6 pt-5 d-flex flex-column align-items-center justify-content-center'>
          <h1 className='mt-5 mb-3 fw-bold'>{props.heading}</h1>
          <input placeholder='*Email' className='w-50 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center'></input>
          <input placeholder='*Email' className='w-50 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center'></input>
          <button className='w-50 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center text-light' style={{backgroundColor:'#000'}}>{props.btnText}</button> 
          <p className='text-secondary'>{props.textOne}</p>
          <p onClick={goToregister}>{props.textTwo}</p>
        </div>:
        <>
        <div className='border border-0 border-success col-10 col-sm-8 col-md-6 pt-5 d-flex flex-column align-items-center justify-content-center'>
          <h1 className='mt-5 mb-3 fw-bold'>{props.heading}</h1>
          <h4 className='my-3'>{props.lead}</h4>
          <div className='row w-100 m-0 p-0 border border-0 border-success'>
          <div className='col-12 pt-5 d-flex flex-row align-items-center justify-content-center'>
            <input placeholder='First Name' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'></input>
            <input placeholder='Last Name' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'></input>
          </div>
          <div className='col-12 pt-1 d-flex flex-row align-items-center justify-content-center'>
            <input placeholder='*Email' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'></input>
            <input placeholder='*Password' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'></input>
          </div>
          <div className='col-12 pt-1 d-flex flex-row align-items-center justify-content-center'>
          <button className='fw-bold w-25 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center text-light' style={{backgroundColor:'#000'}}>{props.btnText}</button> 
          </div>
          </div>
        </div>
         
        </>
         
        }
      </div>
    </div>
  )
}

export default LoginRegister