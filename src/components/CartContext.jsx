import { createContext } from "react";
import { useState } from "react";

export const CartContext = createContext()

export function CartCustomProvider(props) {

    const [totalQuantity, setTotalQuantity] = useState (0)

    const addItemToCart = (quantity) => {
        const finalQuantity = totalQuantity + quantity
        setTotalQuantity(finalQuantity + quantity)
    }

    const removeItemToCart = () => {}

    const clearCart = () => {}

    const elValorDelContexto = {

        items : [],

        totalPrice : 0,

        totalQuantity : totalQuantity,
        addItemToCart,
        removeItemToCart,
        clearCart,

    }

    return (
        <CartContext.Provider value={elValorDelContexto}>
            {props.children}
        </CartContext.Provider>

    )
}