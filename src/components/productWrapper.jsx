import './Css/productWrapper.css'
import React, { useContext } from 'react'
import { ProductContext } from './context'

const ProductWrapper = ({image , title , price , id}) => {
    const {Product ,setCart} = useContext(ProductContext)
    function AddToCart(index) {
        setCart((prev) => {
            return [...prev, Product[index]]; 
          
        });
    }
    

  return (
    <div className='Product'>
        <img src={image} alt="productImage" className='prodIMG' />
        <p>{title}</p>
        <p>${price}</p>
        <button onClick={()=>{return AddToCart(id)}}>Add To Cart</button>

    </div>
  )
}

export default ProductWrapper