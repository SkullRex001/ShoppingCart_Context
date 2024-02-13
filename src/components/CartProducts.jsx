import React, { useContext } from 'react'
import { ProductContext } from './context'
import CartItemWrapper from './CartItemWrapper'
import './Css/ProDiv.css'


const CartProducts = () => {
    const {Cart} = useContext(ProductContext)

   
  return (
    <div className='ProductDiv'>
        {Cart.map((cartItem , index)=>{
           return <CartItemWrapper image={cartItem.image} title={cartItem.title} price={cartItem.price} key={index}/>
    
        })}
    </div>
  )
}

export default CartProducts