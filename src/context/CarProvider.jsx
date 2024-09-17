import React, { useReducer } from 'react'
import { CarContext } from './CarContext'

const initialState = []

export const CarProvider = ({ children }) => {

    const shoppingReducer = (state = initialState, action = {}) => {
        switch (action.type) {
            case '[CAR] Add purchase':
                return [...state, action.payload]

            case '[CAR] Increment purchase':
                return state.map(item => {
                    const quant = item.quantity + 1
                    if (item.id === action.payload)
                        return { ...item, quantity: quant }
                    return item
                })

            case '[CAR] Decrement purchase':
                return state.map(item => {
                    const quant = item.quantity - 1
                    if (item.id === action.payload && item.quantity>1)
                        return { ...item, quantity: quant }
                    return item
                })

            case '[CAR] Remove purchase':
                return state.filter(purchase => purchase.id !== action.payload)

            default:
                return state;
        }
    }

    const [shoppingList, dispatch] = useReducer(shoppingReducer, initialState)

    const addPurchase = (purchase) => {
        purchase.quantity = 1
        const action = {
            type: '[CAR] Add purchase',
            payload: purchase
        }
        dispatch(action)
    }

    const incrementQuantity = (id) => {
        const action = {
            type: '[CAR] Increment purchase',
            payload: id
        }
        dispatch(action)
    }

    const decrementQuantity = (id) => {
        const action = {
            type: '[CAR] Decrement purchase',
            payload: id
        }
        dispatch(action)
    }

    const removePurchase = (id) => {
        const action = {
            type: '[CAR] Remove purchase',
            payload: id
        }
        dispatch(action)
    }

    return (

        <CarContext.Provider value={{ shoppingList, addPurchase, removePurchase, incrementQuantity, decrementQuantity }}>
            {children}
        </CarContext.Provider>
    )
}
