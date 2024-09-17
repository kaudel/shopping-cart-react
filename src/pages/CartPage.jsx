import React, { useContext } from 'react'
import { CarContext } from '../context/CarContext'

export const CartPage = () => {

    const { shoppingList,
        removePurchase,
        incrementQuantity,
        decrementQuantity } = useContext(CarContext)

    const calculateTotal = () => {
        return shoppingList.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
    }

    const handlePrint = () => {
        print()
    }
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        shoppingList.map(item => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className='btn btn-outline-primary'
                                        onClick={() => decrementQuantity(item.id)}
                                    >-</button>
                                    <button
                                        className='btn btn-primary'>{item.quantity}</button>
                                    <button
                                        className='btn btn-outline-primary'
                                        onClick={() => incrementQuantity(item.id)}>
                                        +</button>
                                </td>
                                <td>
                                    <button
                                        type='button'
                                        className='btn btn-danger'
                                        onClick={() => removePurchase(item.id)}>
                                        Remove
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    <th><b>TOTAL:</b></th>
                    <td></td>
                    <td></td>
                    <td>${calculateTotal()}</td>

                </tbody>
            </table>

            <div className='d-grip gap-2'>
                <button
                    className='btn btn-primary'
                    onClick={handlePrint}
                    disabled={shoppingList < 1}>Buy</button>
            </div>
        </>
    )
}
