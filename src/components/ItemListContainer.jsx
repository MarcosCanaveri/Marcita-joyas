import { useState } from "react";
import { Button } from "./Button";

export function Itemlistcontainer(props) {
const handleClick = () => {
    console.log("Hola");
}

const [count, setCount] = useState(0)

const [popupClass, setPopupClass] = useState("popup")

const handleIncrement = () => {
    setCount(1);
}

const handleDecrement = () => {
    setCount(0);
}

const openPopup = () => {
    setPopupClass("popup popup_open")
}

const closePopup = () => {
    setPopupClass("popup popup_close")
}

    return (
        <section>
            <h2>{props.mensaje}</h2>
            
            <div>
                <p>contador: 0 {count}</p>
                <button onClick={handleIncrement}>incremetnar</button>
                <button onClick={handleDecrement}>decremetnar</button>
            </div>

            <Button onClick={openPopup === "popup" ? openPopup : closePopup}>{popupClass === "popup" ? "Abrir" : "cerrar"} popup</Button>
            <div className={popupClass}>
                <p onClick={handleClick}>Soy un pop up</p>
                <Button nombre="Cerrar" icono="X" />
            </div>
        </section>
    )
}