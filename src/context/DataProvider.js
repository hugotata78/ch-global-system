import { createContext, useCallback, useEffect, useState } from "react";
import { products } from '../Data'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [listProducts, setListProducts] = useState([])
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [menu, setMenu] = useState(false)
    const [method,setMethod] = useState(null)
    const [popup,setPopup] = useState(false)

    useEffect(() => {
        const data = products.items
        !data ? setListProducts([]) : setListProducts(data)
    }, [])

    const add = (id) => {
        const check = cart.every(item => {
            return item.id !== id
        })

        if (check) {
            const data = listProducts.filter(product => {
                return product.id === id
            })
            setCart([...cart, ...data])
        }
        else {
            cart.forEach(item => {
                if (item.id === id) {
                    item.quantity += 1
                    setCart([...cart])
                }
            })
        }
    }

    const getTotalPrice = useCallback(() => {
        const res = cart.length === 0 ? 0 : cart.reduce((prev, index) => {
            return prev + (index.price * index.quantity)
        }, 0)

        return res
    },[cart])

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('productsCart'))
        if (dataCart) {
            setCart(dataCart)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('productsCart', JSON.stringify(cart))
    }, [cart])

    useEffect(() => {
        setTotalPrice(getTotalPrice())
    },[setTotalPrice,getTotalPrice])

    const value = {
        products: [listProducts],
        add: add,
        cart: [cart, setCart],
        totalPrice: [totalPrice, setTotalPrice],
        menu: [menu, setMenu],
        method:[method,setMethod],
        popup:[popup,setPopup]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}