import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusCircle, faPlusCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

export const TableCart = ({ cart, removeItem, subtract, add }) => {
    return (
        <table className='table table-hover p-2'>
            <thead>
                <tr>
                    <th>CANTIDAD</th>
                    <th>PRODUCTO</th>
                    <th>TAX</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                {
                    cart && cart.map((c,index) => {
                        
                        return (
                            <tr key={index}>
                                <td>
                                    <span>{c.quantity}</span>
                                    <FontAwesomeIcon
                                        icon={faPlusCircle}
                                        className='quantity'
                                        onClick={e=>add(e,c.id,index)}
                                    />
                                    <FontAwesomeIcon
                                        icon={faMinusCircle}
                                        className='quantity'
                                        onClick={e=>subtract(e,c.id,index)}
                                    />
                                </td>
                                <td>{c.name}</td>
                                <td>{c.price}</td>
                                <td>{c.price * c.quantity}</td>
                                <td>
                                    <FontAwesomeIcon
                                        icon={faTrashAlt}
                                        className='trash'
                                        onClick={e=>removeItem(e,c.id,index)}
                                    />
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}