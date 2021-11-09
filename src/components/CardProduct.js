import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";


export const CardProduct = ({ id, img, name, price }) => {

    const value = useContext(DataContext)
    const add = value.add
    return (
        <div className='col-12 col-md-6 col-lg-3 my-2'>
            <div className="card card-height" style={{ width: "18rem;" }}>
                <div className='d-flex justify-content-center'>
                    <img
                        src={img}
                        className="card-img-top"
                        alt={name}
                        onClick={e=>add(id)}
                    />
                </div>
                <div className="card-body">
                    <p className="card-text">{name}</p>
                    <p className="card-text">{price} CAD</p>
                </div>
            </div>
        </div>
    )
}