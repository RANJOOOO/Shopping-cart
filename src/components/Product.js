import React from 'react'

export default function Product(props) {
  return (
    <div className='row mt-3'>
        <div className='col-5'><h2>{props.comingdata.name} <span class="badge bg-secondary">{props.comingdata.price}</span></h2></div>
        <div className='col-3'>
            <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger"  onClick={()=>{props.addmore(props.index)}}>+</button>
            <button type="button" class="btn btn-warning">{props.comingdata.quantity}</button>
            <button type="button" class="btn btn-success" onClick={()=>{props.subquan(props.index)}}>-</button></div>
        
        </div>

        <div className='col-2'>
            {props.comingdata.quantity*props.comingdata.price}
        </div>
        <button className='col-1 btn btn-danger' onClick={()=>{props.remove(props.index)}}>remove</button>
        </div>
  )
}
