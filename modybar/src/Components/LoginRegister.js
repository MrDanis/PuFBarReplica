import React ,{useState}from 'react'
import {useNavigate } from 'react-router-dom'


const LoginRegister = (props) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [lastName, setlastName] = useState();
  const [phone, setPhone] = useState();
  const [emailReg, setEmailReg] = useState();
  const [city, setCity] = useState();
  
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const [address1, setAddress1] = useState();
  const [address2, setAddress2] = useState();
  const [passwordRegCon, setPasswordRegCon] = useState();
  const [passwordReg, setPasswordReg] = useState();
  const goToregister =()=>{
    navigate('/Authentication/Register');
  } 
  const LoginHandler =()=>{
      // alert("hello",email+password)
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if(email && password){
     
     console.log(email,password)
       var vSearchStr={
          //    login_id : "ahmed@webxelltech.com",
          // login_password : "SA12941"
          branch_id : 2,
          login_type:"email",
          login_id : email,
          login_password : password
          
       }
         fetch("http://74.208.115.190:80/4DACTION/AjerWebPublicUserLogin",{
           method:"POST",
           'Content-Type':"application/json",
           body: JSON.stringify(vSearchStr)
         }).then(res=>res.json()).then((res)=>{
           console.log(res)
         }) .catch(function (error) {
          alert('Please Enter Valid Email or Password');
          // setloading(false);
        });
     }else{
        alert("Please fill both fields")
      }

  
    //    var vSearchStr={
    //      "ArrayProductsID":[1,2,3,4,5,6,7,8,9]
        
    //  }
    //    fetch("http://74.208.115.190:80/4DACTION/WebPictureCallsProductMultiple",{
    //      method:"POST",
    //      'Content-Type':"application/json",
    //      body: JSON.stringify(vSearchStr)
    //    }).then(res=>res.json()).then((res)=>{
    //      console.log(res)
    //    })
  }
  const RegisterHandler =()=>{
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(name &&lastName&& phone&&emailReg&&city&&state&&zip&&address1&&address2&&passwordReg){  
      
        if(passwordReg ==passwordReg){
        console.log(name,phone,emailReg,city,state,zip,address1,address2,passwordReg,passwordRegCon)
    var vSearchStr={
      //  "ArrayProductsID":[1,2,3,4,5,6,7,8,9],
      branch_id : 2,
      first_name:name,
      last_name:lastName,
      phone : phone,
      email : emailReg, 
      city : city,
      state:state,
      zip : zip,
      address_1 :address1,
      address_2:address2,
      password : passwordReg,
      type_id:1,
      business_title:"test",
      license_no:"test",
      string_license_image:"test"
   
      
   }
     fetch("http://74.208.115.190:80/4DACTION/AjerWebClientSprofileCreation",{
       method:"POST",
       'Content-Type':"application/json",
       body: JSON.stringify(vSearchStr)
     }).then(res=>res.json()).then((res)=>{
     if(res[0].request_status!=="Phone Already Exist"){
      if(res[0].request_status!=="eMail Already Exist"){
        if(res[0].request_status!=="Transaction failure"){
        // all work in this section
      console.log(res)
        }
        else{
        alert("Transaction failure ")
        }
      }
      else{
        alert("Email Already Exist")
      }
     }
     else{
      alert("Phone Number Already Exist")
     }
       
     }) .catch(function (error) {
      alert('Please Enter Valid Data ');
      // setloading(false);
    });
        }else{
          alert("Password and conform password not match")
        }
 
    }else{
      alert("Please fill all fields")
    }
  }
  return (
    <div className='container-fluid m-0 p-0'>
      <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
        {
          props.compType === 'login'?
        <div className='col-10 col-sm-8 col-md-6 pt-5 d-flex flex-column align-items-center justify-content-center'>
          <h1 className='mt-5 mb-3 fw-bold'>{props.heading}</h1>
          <input placeholder='*Email' className='w-50 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center' onChange={(e)=>{
            setEmail(e.target.value)
          }}></input>
          <input placeholder='*Password' type="password"  className='w-50 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setPassword(e.target.value)
          }}></input>
          {/* <button className='w-50 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center text-light' style={{backgroundColor:'#000'}}>{props.btnText}</button>  */}
          <button  onClick={LoginHandler} className='w-50 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center text-light' style={{backgroundColor:'#000'}}>{props.btnText}</button>
          <p className='text-secondary'>{props.textOne}</p>
          <p onClick={goToregister}>{props.textTwo}</p>
        </div>:
        <>
        <div className='border border-0 border-success col-10 col-sm-8 col-md-6 pt-5 d-flex flex-column align-items-center justify-content-center'>
          <h1 className='mt-5 mb-3 fw-bold'>{props.heading}</h1>
          <h4 className='my-3'>{props.lead}</h4>
          <div className='row w-100 m-0 p-0 border border-0 border-success'>
          <div className='col-12 pt-5 d-flex flex-row align-items-center justify-content-center'>
            <input placeholder='*First Name' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setName(e.target.value)
          }}></input>
           <input placeholder='*Last Name' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setlastName(e.target.value)
          }}></input>
           
          </div>
          <div className='col-12 pt-1 d-flex flex-row align-items-center justify-content-center'>
            <input placeholder='*Email' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setEmailReg(e.target.value)
          }}></input>
           <input placeholder='*Phone' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setPhone(e.target.value)
          }}></input>
          
          </div>
          <div className='col-12 pt-1 d-flex flex-row align-items-center justify-content-center'>
            <input placeholder='*State' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setState(e.target.value)
          }}></input>
            <input placeholder='*Zip' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setZip(e.target.value)
          }}></input>
          </div>
          <div className='col-12 pt-1 d-flex flex-row align-items-center justify-content-center'>
            <input placeholder='*Address1' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setAddress1(e.target.value)
          }}></input>
            <input placeholder='*Address2' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setAddress2(e.target.value)
          }}></input>
          </div>
          <div className='col-12 pt-1 d-flex flex-row align-items-center justify-content-center'>
          <input placeholder='*City' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setCity(e.target.value)
          }}></input>
            <input placeholder='*Password'  type="password" className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setPasswordReg(e.target.value)
          }}></input>
            {/* <input placeholder='*Confirm Password '  type="password" className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'onChange={(e)=>{
            setPasswordRegCon(e.target.value)
          }}></input> */}
          </div>
          <div className='col-12 pt-1 d-flex flex-row align-items-center justify-content-center'>
          <button className='fw-bold w-25 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center text-light' style={{backgroundColor:'#000'}} onClick={RegisterHandler}>{props.btnText}</button> 
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






// import React from 'react'
// import {useNavigate } from 'react-router-dom'
// const LoginRegister = (props) => {
//   const navigate = useNavigate()
//   const goToregister =()=>{
//     navigate('/Authentication/Register');
//   } 
//   return (
//     <div className='container-fluid m-0 p-0'>
//       <div className='row m-0 p-0 d-flex align-items-center justify-content-center'>
//         {
//           props.compType === 'login'?
//         <div className='col-10 col-sm-8 col-md-6 pt-5 d-flex flex-column align-items-center justify-content-center'>
//           <h1 className='mt-5 mb-3 fw-bold'>{props.heading}</h1>
//           <input placeholder='*Email' className='w-50 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center'></input>
//           <input placeholder='*Email' className='w-50 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center'></input>
//           <button className='w-50 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center text-light' style={{backgroundColor:'#000'}}>{props.btnText}</button> 
//           <p className='text-secondary'>{props.textOne}</p>
//           <p onClick={goToregister}>{props.textTwo}</p>
//         </div>:
//         <>
//         <div className='border border-0 border-success col-10 col-sm-8 col-md-6 pt-5 d-flex flex-column align-items-center justify-content-center'>
//           <h1 className='mt-5 mb-3 fw-bold'>{props.heading}</h1>
//           <h4 className='my-3'>{props.lead}</h4>
//           <div className='row w-100 m-0 p-0 border border-0 border-success'>
//           <div className='col-12 pt-5 d-flex flex-row align-items-center justify-content-center'>
//             <input placeholder='First Name' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'></input>
//             <input placeholder='Last Name' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'></input>
//           </div>
//           <div className='col-12 pt-1 d-flex flex-row align-items-center justify-content-center'>
//             <input placeholder='*Email' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'></input>
//             <input placeholder='*Password' className='rounded w-75 mx-3 mb-4 p-3 border border-2 border-dark d-flex align-items-center justify-content-center'></input>
//           </div>
//           <div className='col-12 pt-1 d-flex flex-row align-items-center justify-content-center'>
//           <button className='fw-bold w-25 mb-4 p-3 border border-1 border-dark d-flex align-items-center justify-content-center text-light' style={{backgroundColor:'#000'}}>{props.btnText}</button> 
//           </div>
//           </div>
//         </div>
         
//         </>
         
//         }
//       </div>
//     </div>
//   )
// }

// export default LoginRegister