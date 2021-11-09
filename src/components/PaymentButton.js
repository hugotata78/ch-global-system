import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

export const PaymentButton = () => {

    const value = useContext(DataContext)
    const [method] = value.method
    const [popup, setPopup] = value.popup
    const [cart] = value.cart

    const handleOnClick = (e) => {
        e.preventDefault()
        if (!method) {
            alert('Agregue un medio de Pago!')
        }
        else if (cart.length === 0){
            alert('No tiene productos agregados al carrito')
        }
        else {
            setPopup(!popup)
        }
    }
    return (
        <button
            className='col-12 col-md-3 mt-4 payment-btn'
            onClick={handleOnClick}
        >
            Pagar
        </button>
    )
}