import { faBars, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";

export const LeftSidebar = () => {

    const value = useContext(DataContext)
    const [menu, setMenu] = value.menu
    const [cart] = value.cart

    const handleClick = (e) => {
        e.preventDefault()
        setMenu(!menu)
    }
    return (
        <div className='d-flex justify-content-center flex-column p-4 sticky-top'>
            <div className='text-center number'>
                <span>{cart.length || 0 }</span>
            </div>
            <FontAwesomeIcon
                icon={faShoppingCart}
                onClick={handleClick}
                className='cart-icon'
            />
        </div>
    )
}