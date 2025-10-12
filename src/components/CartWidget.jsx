import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Badge } from "antd"

export function Cartwidget() {

    const ValorDelContexto = useContext(CartContext)
    
    return (
        <Badge count = { ValorDelContexto.totalQuantity } offset={(-5,5)}>
        <div>🛒</div>
        </Badge>
    )
}