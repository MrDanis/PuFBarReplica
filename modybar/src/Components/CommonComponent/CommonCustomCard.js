import React from 'react'
import {Link} from 'react-router-dom'
const CommonCustomCard = (props) => {
  return (
    <>
    <Link to={props.redirectdTo}>
    <div className={props.mainParent}>
      <div className={props.childOneClass}> 
        <h3>{props.heading}</h3>
        <p className='mb-0'>{props.quantity}</p>
        <p>{props.flavour==="test"?'':props.flavour}</p>
        <button className={props.flavour==='test'?props.btnClass:'btn'} style={{backgroundColor:props.btnColor,color:props.btnTextColor}}>{props.btnText}</button>
      </div>
      <div className={props.childTwoClass}>
        <img className='img-fluid m-9 p-0' src={props.explainImage} alt='test'></img>     
      </div>
    </div>
    </Link>
    </>
  )
}

export default CommonCustomCard