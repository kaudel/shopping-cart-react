import React, { useState } from 'react'

export const Card = ({image, title, description, price,id, 
    handleAdd, handleRemove, handleIncrement,handleDecrement  }) => {

    const [added, setAdded] = useState(false)

    const clickAdd = () =>{
        handleAdd()
        setAdded(true)
    }

    const clickRemove = () =>{
        handleRemove()
        setAdded(false)
    }

    return (
        <>
        <div className='tarjeta' key={id}  >
           <img src={image} alt={title} className='tarjeta-imagen' />
            <div className='tarjeta-contenido'>
                <h3 className='tarjeta-titulo'>{title}</h3>
                <p className='tarjeta-descripcion'>{description}</p>
                <p className='tarjeta-precio'>{price}</p>
             
            {added
                ? <button
                    type='button' className='boton-quitar' onClick={clickRemove} >Remove from car</button>
                : <button
                    type='button' className='boton-agregar' onClick={clickAdd} >Add to car</button>
            }
            </div>
        </div>
        </>
    )
}
