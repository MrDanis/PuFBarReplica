import Index from './Routes/Index';
import React,{useEffect,useState} from 'react'
import { ProductContex } from './ContextStore';
import axios from 'axios';
import { TraceSpinner } from "react-spinners-kit";
function App() {
  const [producData,setproducData] = useState([]);
  const [loading,setloading] = useState(true);
 const getAlldata =async()=>{
  // alert('Calling the data')
     let vSearchStr3={branch_id : 2}
     let apiBaseUrl = 'http://74.208.115.190:80/4DACTION';
     let endPointThree ='AjerWebProductsCatsCallingUp';
     let endPointFour = 'AjerWebProductsListCallingUp';
     let vSearchStr4 ={
      branch_id : 2,
      client_id:"",
      item_code:"",
      item_name:"",
      category_id:0
     };
    ;
      let dataFour = await  fetch(`${apiBaseUrl}/${endPointFour}`,{
        method:"POST",
        'Content-Type':"application/json",
        body: JSON.stringify(vSearchStr4)
      });
      let responseData4 = await dataFour.json();
      setproducData(...producData,responseData4);
      setloading(!loading);
      console.log('data from the api is : ',responseData4);
    //  calling all apis for the data 
    //  calling APi one
    //  const data3 = await  fetch("http://74.208.115.190:80/4DACTION/AjerWebProductsCatsCallingUp",
    //  {
    //    method:"POST",
    //    'Content-Type':"application/json",
    //    body: JSON.stringify(vSearchStr3)
    //  });
    //  const response3 =await data3.json();
    //  calling APi Two 
    console.log('call before the api is :',vSearchStr4);
    //  const data4 = await fetch("http://74.208.115.190:80/4DACTION/AjerWebProductsListCallingUp",{
    //   method:"POST",
    //   'Content-Type':"application/json",
    //   body: JSON.stringify(vSearchStr4)
    //  });
    //  const response4 =await data4.json();
    //  console.log('async data response is : ',response4.data)
 }
  useEffect(() => {
    getAlldata();
    // 3
  //   var vSearchStr={
  
  //     branch_id : 2,
     
      
  //  }
  //    fetch("http://74.208.115.190:80/4DACTION/AjerWebProductsCatsCallingUp",
  //    {
  //      method:"POST",
  //      'Content-Type':"application/json",
  //      body: JSON.stringify(vSearchStr)
  //    }).then(res=>res.json()).then((res)=>{
  //      console.log("3:AjerWebProductsCatsCallingUp",res);
  //    }) .catch(function (error) {
  //     alert('Please Enter Valid Email or Password');
  //     // setloading(false);
  //   });
  //   //4
  //   var vSearchStr={
    
  //     branch_id : 2,
  //     client_id:"",
  //     item_code:"",
  //     item_name:"",
  //     category_id:0
   
      
  //  }

  //    fetch("http://74.208.115.190:80/4DACTION/AjerWebProductsListCallingUp",{
  //      method:"POST",
  //      'Content-Type':"application/json",
  //      body: JSON.stringify(vSearchStr)
  //    }).then(res=>res.json()).then((res)=>{
  //     console.log("4:AjerWebProductsListCallingUp",res)


       
  //    }) .catch(function (error) {
  //     alert('Please Enter Valid Email or Password');
  //     // setloading(false);
  //   });
    //5
//     var vSearchStr1={
//       system_id :[353]
  
// }
//  fetch("http://74.208.115.190:80/4DACTION/AjerSingleProductsDetailsCallsUp",{
//    method:"POST",
//    'Content-Type':"application/json",
//    body: JSON.stringify(vSearchStr1)
//  }).then(res=>res.json()).then((res)=>{
//   console.log("5:AjerSingleProductsDetailsCallsUp",res)

//  })
//  .catch(function (error) {
//   console.log("5 Error:AjerSingleProductsDetailsCallsUp",error)

//   // setloading(false);
// });
//6

    //       var vSearchStr1={
    //         ArrayProductsID :[353,340,369,357]
        
    //  }
    //    fetch("http://74.208.115.190:80/4DACTION/AjerMultiProductsDetailsCallsUp",{
    //      method:"POST",
    //      'Content-Type':"application/json",
    //      body: JSON.stringify(vSearchStr1)
    //    }).then(res=>res.json()).then((res)=>{
    //     console.log("6:AjerMultiProductsDetailsCallsUp",res)

    //    })
    //    .catch(function (error) {
    //     // alert('Please Enter Valid Email or Password');
    //     console.log("6 Error:AjerMultiProductsDetailsCallsUp",error)
    //     // setloading(false);
    //   });

  },[]);
  return (
    <ProductContex.Provider value={{producData}}>
      {
          producData?.length===0?
            <div className='container-fluid m-0 p-0 d-flex justify-content-center align-items-center' style={{height:'100vh'}}><TraceSpinner size={100} color="#686769" loading={loading}></TraceSpinner></div>:
            <Index></Index>
      }
    </ProductContex.Provider>
  );
}

export default App;
