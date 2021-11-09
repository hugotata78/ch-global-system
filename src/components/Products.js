import React, { useContext } from "react";
import { DataContext } from "../context/DataProvider";
import { CardProduct } from "./CardProduct";
import { SubNavBar } from "./SubNavBar";


export const Products = () => {

    const value = useContext(DataContext)
    const [products] = value.products
    return (
        
            <div className='row d-flex m-auto'>
                <div className='col-12'>
                    <SubNavBar/>
                </div>
                {
                    products && products.map(product => {
                        return (
                            <CardProduct
                                id={product.id}
                                key={product.id}
                                img={product.image.default}
                                name={product.name}
                                price={product.price}
                            />
                        )
                    })
                }
            </div>
        
    )
}