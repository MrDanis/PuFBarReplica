import React from 'react'

const CommonCustomCard = (props) => {
  return (
    <>
    <div className={props.mainParent}>
      <div className={props.childOneClass}>
        <h3>{props.heading}</h3>
        <p className='mb-0'>{props.quantity}</p>
        <p>{props.flavour}</p>
        <button className='btn' style={{backgroundColor:props.btnColor,color:props.btnTextColor}}>{props.btnText}</button>
      </div>
      <div className={props.childTwoClass}>
        <img className='img-fluid m-9 p-0' src={props.explainImage} alt='test'></img>     
      </div>
    </div>
    </>
  )
}

export default CommonCustomCard