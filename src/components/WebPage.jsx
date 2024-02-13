import React, { useEffect, useState } from 'react'
import HomePage from './HomePage'
import { ProductContext } from './context'
import TopNav from './TopNav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartPage from './cart'

const WebPage = () => {
    const [Product, setProduct] = useState([])
    const [Cart , setCart] = useState([])
    useEffect(() => {
        async function GetProdutcs() {
            const data = await fetch('https://fakestoreapi.com/products')
            const product = await data.json()
            setProduct([...Product, ...product])
        }
        GetProdutcs()
    }, [])

    return (
        <>
            <BrowserRouter>
                <TopNav />
                <Routes>
                    <Route path='/' element={<ProductContext.Provider value={{ Product, setProduct , setCart , Cart }}>
                        <HomePage />
                    </ProductContext.Provider>} />
                    <Route path='/cart' element = {<ProductContext.Provider value={{Cart}}> <CartPage/> </ProductContext.Provider>}/>
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default WebPage