import { Badge } from '@mui/material'
import React, { useContext } from 'react'
import { ShoppingCart } from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { CarContext } from '../context/CarContext'

export const NavBar = () => {
    const {shoppingList } = useContext(CarContext)

    return (        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to='/' className="navbar-brand" href="#">Cart Shopping</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <NavLink to={'/'} className='nav-link active'>Shop</NavLink>
                        </li>
                    </ul>
                    <NavLink to='/ShopingCart'>
                        <Badge badgeContent={shoppingList.length} color="secondary">
                            <ShoppingCart color="action" />
                        </Badge>
                    </NavLink>
                </div>
            </div>
        </nav>

    )
}
