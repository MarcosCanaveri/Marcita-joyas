import { Contador } from "./Contador";
import { useState, useContext } from "react"
import { CartContext } from "./CartContext";
import { Button } from "antd";


export const ItemDetail = (props) => {

    const [quantity, setQuantity] = useState(0)
    const ValorDelContexto = useContext(CartContext)

    const handle = (data) => {
        setQuantity(data)
    }

    const handleAddToCart = () => {
        console.log(quantity)
        ValorDelContexto.addItemToCart(quantity)
    }


    return (
        <div>
            {props.product.title}
            <Contador handle={handle} />
            {quantity > 0 ? (
                <Button type="primary" onClick={handleAddToCart}>
                    Agregar al carrito
                </Button>
            ) : null}
        </div>
    )
}