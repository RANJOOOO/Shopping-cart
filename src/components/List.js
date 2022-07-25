import React from 'react'
import Product from './Product'

export default function List(props) {
  return (
    props.data.length > 0 ?
    props.data.map((x , i)=>{
        return <Product comingdata={x} key={i} index={i} addmore={props.addmore} subquan={props.subquan} remove={props.remove}/>
    })
    : <h1>No product present in the cart</h1>
    
  )
}
