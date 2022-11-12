import React from 'react'
import LoginRegister from '../Components/LoginRegister'
const Authentication = (props) => {
  return (<LoginRegister lead={props.laed} compType={props.compType} textOne={props.textOne} textTwo={props.textTwo} btnText={props.btnText} heading={props.heading} componentType={props.compType}></LoginRegister>  )
}

export default Authentication