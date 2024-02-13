import React, { useContext } from 'react'
import ProductWrapper from './productWrapper'
import { ProductContext } from './context'
import './Css/ProDiv.css'
const HomePage = () => {
    const { Product } = useContext(ProductContext)
   
    return (
        <div className='ProductDiv'>
            {Product.map((product , index) => {
                return <ProductWrapper image={product.image} title={product.title} price={product.price}  id={index} key={index}/>
            })
            }
        </div>
    )
}

export default HomePage