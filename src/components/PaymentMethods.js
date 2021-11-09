import React, { useContext } from "react";
import cash from '../images/pngwing.com.png'
import visa from '../images/visa.png'
import mastercard from '../images/mastercard.png'
import uber from '../images/uber-eats.jpg'
import debito from '../images/debito.jpg'
import plus from '../images/plus.png'
import { DataContext } from "../context/DataProvider";

export const PaymentMethods = () => {

    const value = useContext(DataContext)
    const [method,setMethod] = value.method

    const handleChange = (e)=>{
        setMethod(e.target.value)
        console.log(method)
    }
    return (

        <div className='col-12 col-md-9 d-flex justify-content-center mt-4'>
            <div className='row mx-0'>
                <div className='col-12 col-md-6 col-lg-4 mb-2'>
                    <div className="card" >
                        <input
                            type="radio"
                            id='cash-payment'
                            value='efectivo'
                            name='payment-methods'
                            className='d-none'
                            onChange={handleChange}
                        />
                        <label
                            htmlFor='cash-payment'
                            className='card-payment'
                        >
                            <img
                                src={cash}
                                alt='cash'
                                className='payment-img'
                            />
                        </label>

                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-2'>
                    <div className="card" style={{ width: "18rem;" }}>
                        <input
                            type="radio"
                            id='visa-payment'
                            value='tarjeta visa'
                            name='payment-methods'
                            className='d-none'
                            onChange={handleChange}
                        />
                        <label
                            htmlFor='visa-payment'
                            className='card-payment'
                        >
                            <img
                                src={visa}
                                alt='visa'
                                className='payment-img'
                            />
                        </label>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-2'>
                    <div className="card" style={{ width: "18rem;" }}>
                        <input
                            type="radio"
                            id='mastercard-payment'
                            value='tarjeta mastercard'
                            name='payment-methods'
                            className='d-none'
                            onChange={handleChange}
                        />
                        <label
                            htmlFor='mastercard-payment'
                            className='card-payment'
                        >
                            <img
                                src={mastercard}
                                alt='mastercard'
                                className='payment-img'
                            />
                        </label>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-2'>
                    <div className="card" style={{ width: "18rem;" }}>
                        <input
                            type="radio"
                            id='uber-payment'
                            value='tarjeta uber-eats'
                            name='payment-methods'
                            className='d-none'
                            onChange={handleChange}
                        />
                        <label
                            htmlFor='uber-payment'
                            className='card-payment'
                        >
                            <img
                                src={uber}
                                alt='uber'
                                className='payment-img'
                            />
                        </label>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-2'>
                    <div className="card" style={{ width: "18rem;" }}>
                        <input
                            type="radio"
                            id='debito-payment'
                            value='tarjeta de debito'
                            name='payment-methods'
                            className='d-none'
                            onChange={handleChange}
                        />
                        <label
                            htmlFor='debito-payment'
                            className='card-payment'
                        >
                            <img
                                src={debito}
                                alt='debito'
                                className='payment-img'
                            />
                        </label>
                    </div>
                </div>
                <div className='col-12 col-md-6 col-lg-4 mb-2'>
                    <div className="card" style={{ width: "18rem;" }}>
                        <input
                            type="radio"
                            id='plus-payment'
                            value='otra forma de pago'
                            name='payment-methods'
                            className='d-none'
                            onChange={handleChange}
                        />
                        <label
                            htmlFor='plus-payment'
                            className='card-payment'
                        >
                            <img
                                src={plus}
                                alt='plus'
                                className='payment-img'
                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>

    )
}