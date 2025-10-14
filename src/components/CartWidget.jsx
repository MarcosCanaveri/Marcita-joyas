import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Badge } from "antd"
import { Link } from "react-router-dom"

export function Cartwidget() {

    const ValorDelContexto = useContext(CartContext)
    
    return (
       <Link to="/Cart">
        <Badge count = { ValorDelContexto.totalQuantity } offset={(-5,5)}>
        <div>🛒</div>
        </Badge>
       </Link>        
    )
}