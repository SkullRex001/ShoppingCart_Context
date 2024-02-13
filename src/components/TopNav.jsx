import React, { useContext } from 'react'
import './Css/Navbar.css'
import { Link } from 'react-router-dom'
import { ProductContext } from './context'

const TopNav = () => {
    const {Cart} = useContext(ProductContext)
    console.log(Cart)

    return (
        <div className='NavDiv'>
            <p>E-Shop</p>
            <div className='Link'>
                <Link to="/">Home</Link>
                <Link to="/cart">Cart</Link>
            </div>
            <p>Cart Item : {Cart.length}</p>

        </div>
    )
}

export default TopNav