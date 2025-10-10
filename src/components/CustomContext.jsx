import { createContext } from "react";

export const miContexto = createContext()

export function CustomContext(props) {

const elValorDelContexto  = {
    nombre : "Marcos"
}

    return (
        <miContexto.Provider value={elValorDelContexto}>
            {props.children}
        </miContexto.Provider>
    )
}