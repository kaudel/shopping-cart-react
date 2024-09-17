
import React, { useContext } from 'react'
import '../styles/card.css'
import { Card } from '../components/Card'
import { ProductsContext } from '../context/ProductsContext'
import { CarContext } from '../context/CarContext'

export const ShoppingPage = () => {

    const { products } = useContext(ProductsContext)
    const { 
        addPurchase,
        removePurchase} = useContext(CarContext)
    
    const handleAdd = (purchase) =>{
        addPurchase(purchase)
    }

    const handleRemove =(id) =>{
        removePurchase(id)
    }

    return (
        <>
            <h1>Shop</h1>
            <hr />
            {products.map(product => (
                <Card
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    key={product.id}
                    handleAdd={ ()=> handleAdd(product)}
                    handleRemove={()=> handleRemove(product.id)}
                >  </Card>
            ))}
        </>
    )
}
