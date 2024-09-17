import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { ShoppingPage } from './pages/ShoppingPage'
import { CartPage } from './pages/CartPage'
import { ProductsProvider } from './context/ProductsProvider'
import { CarProvider } from './context/CarProvider'

export const ShoppingCart = () => {
    return (
        <ProductsProvider>
            <CarProvider>
                <NavBar></NavBar>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<ShoppingPage></ShoppingPage>}></Route>
                        <Route path='/ShopingCart' element={<CartPage></CartPage>}></Route>
                        <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
                    </Routes>
                </div>
            </CarProvider>
        </ProductsProvider>
    )
}
