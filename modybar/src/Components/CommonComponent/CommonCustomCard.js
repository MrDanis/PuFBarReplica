import React from 'react'
import {Link} from 'react-router-dom'
const CommonCustomCard = (props) => {
  return (
    <>
    <div className={props.mainParent}>
      <div className='d-flex w-100 m-0 p-1 shadow border border-1 border-gray flex-wrap' style={{borderRadius:'10px'}}>

      <div className={props.childOneClass} style={{display:'grid',gridTemplateColumns:'subgrid'}}> 
        <h6 className='d-flex flex-wrap'>{props.heading}</h6>
        <p className='mb-0'>{props.quantity}</p>
        <p>{props.flavour==="test"?'':props.flavour}</p>
        <button className={props.flavour==='test'?props.btnClass:'btn text-align-bottom'} style={{backgroundColor:props.btnColor,color:props.btnTextColor}}>
        <Link className='text-light' to={props.redirectdTo}>
          {props.btnText}
        </Link>
          </button>
      </div>
      <div className={props.childTwoClass}>
        <img className='img-fluid m-9 p-0' src={props.explainImage} alt='test' style={{width:'150px',height:'150px'}}></img>     
      </div>
      </div>
    </div>
    </>
  )
}

export default CommonCustomCard