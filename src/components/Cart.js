import React, { useContext, useEffect } from "react";
import { DataContext } from "../context/DataProvider";
import { TableCart } from "./TableCart";


export const Cart = () => {

    const value = useContext(DataContext)
    const [cart, setCart] = value.cart
    const [totalPrice] = value.totalPrice
    const [menu] = value.menu
    const show = menu ? 'd-block' : 'd-none'

    const removeItem = (e, id, index) => {
        e.preventDefault()
        cart.forEach(item => {
            if (item.id === id) {
                item.quantity = 1
                setCart([...cart])
            }
        })
        cart.splice(index, 1)
        setCart([...cart])
    }

    const subtract = (e, id, index) => {
        e.preventDefault()
        cart.forEach(item => {
            if (item.id === id) {
                item.quantity <= 1 ? removeItem(e, id, index) : item.quantity -= 1
                setCart([...cart])
            }
        })
    }

    
    const add = (e, id, index) => {
        e.preventDefault()
        cart.forEach(item => {
            if (item.id === id) {
                item.quantity += 1
                setCart([...cart])
            }
        })
    }

    return (
        <div className={show}>
            {!cart.length && <h2 className='cart-empty'>Lista de Productos vacia!</h2>}
            {cart.length > 0
                &&
                <TableCart
                    cart={cart}
                    removeItem={removeItem}
                    subtract={subtract}
                    add={add}
                />

            }
            {totalPrice > 0 &&
                <div className='mt-4 p-4'>
                    <hr />
                    <div className='d-flex justify-content-end'>
                        <h2>Total <span>{totalPrice}</span> </h2>

                    </div>
                </div>
            }
        </div>
    )
}