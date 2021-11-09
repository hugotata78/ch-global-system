import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

export const PaymentPopUp = () => {
    const value = useContext(DataContext)
    const [method, setMethod] = value.method
    const [popup, setPopup] = value.popup
    const classPopup = popup ? 'pop-up' : 'd-none'

    const handleOnClick = e => {
        e.preventDefault()
        setPopup(!popup)
        setMethod(null)
    }
    return (
        <div className={classPopup} onClick={handleOnClick}>
            <div className='card card-popup p-1'>
                <di className='d-flex justify-content-end p-0 m-0'>
                    <button className='btn btn-danger'>X</button>
                </di>
                <div className="card-body p-4">
                    <h5 className="card-title">Su forma de Pago</h5>
                    <p className="card-text">Usted quiere pagar con {method}</p>
                    <div className='d-flex justify-content-center p-4'>
                        <button
                            className='btn btn-success m-2'
                            onClick={handleOnClick}
                        >
                            Aceptar
                        </button>
                        <button
                            className='btn btn-danger m-2'
                            onClick={handleOnClick}
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}