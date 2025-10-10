import { Contador } from "./Contador";
import { useState, useContext } from "react"
import { miContexto } from "./CustomContext";

export function ItemDetail(props) {

    const [received, setReceived] = useState(false)
    const elValorDelContexto = useContext(miContexto)
    console.log("Resultado:", elValorDelContexto)

    const handle = (data) => {
        setReceived(true)
    }

    return (
        <div>
            {props.product.title}
            <Contador handle={handle}/>
            <p>{received === true ? "Se recibio 1" : "No se recibio"}</p>
        </div>
    )
}