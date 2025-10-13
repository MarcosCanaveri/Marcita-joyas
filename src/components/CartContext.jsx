import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export function CartCustomProvider(props) {

    const [totalQuantity, setTotalQuantity] = useState (0)
    const [items, setItems] = useState (0)
    const [totalPrice, setTotalPrice] = useState (0)

    const addItemToCart = (quantity) => {
        const finalQuantity = totalQuantity + quantity
        setTotalQuantity(finalQuantity + quantity)
    }

    const removeItemFromCart = () => {}

    const clearCart = () => { 
        setTotalQuantity(0)
        setItems(0)
        setTotalPrice(0)
    }

    const elValorDelContexto = {

        items : [],

        totalPrice : 0,

        totalQuantity : totalQuantity,
        addItemToCart,
        removeItemFromCart,
        clearCart,

    }

    return (
        <CartContext.Provider value={elValorDelContexto}>
            {props.children}
        </CartContext.Provider>

    )
}