import React, { useContext } from 'react'
import './Css/CardFooter.css'
import { ProductContext } from './context'


const CardFooter = () => {
    const {Cart}  = useContext(ProductContext)
    let Total = 0;
        Cart.forEach((item)=>{
            Total = Total + item.price
        })
   
  return (
    <div className='Footer'>
        Price : ${Total}
    </div>
  )
}

export default CardFooter