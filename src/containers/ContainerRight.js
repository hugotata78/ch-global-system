import React from "react";
import { PaymentButton } from "../components/PaymentButton";
import { PaymentMethods } from "../components/PaymentMethods";
import { Products } from "../components/Products";

export const ContainerRight = ()=>{
    return(
        <div className='container d-flex justify-content-center m-auto'>
            <div className='row'>
                <Products />
                <PaymentMethods />
                <PaymentButton />
            </div>
        </div>
    )
}