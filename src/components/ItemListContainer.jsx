import { useState } from "react"
import { Button } from "./Button";

export function ItemListContainer(props) {
    //acciones    
    const handleClick = () => {
        console.log("Hola");
    }

    const [count, setCount] = useState(0)

    const [popupClass, setPopupClass] = useState("popup")

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    const openPopup = () => {
        setPopupClass("popup popup_open")
    }

    const closePopup = () => {
        setPopupClass("popup popup_close")
    }
    //vista
    return (
        <main className="main">
        <section className="main__section">
            <h2 className="main__title">{props.mensaje}</h2>

            <div className="products">
                <p>contador: {count}</p>
                <button onClick={handleIncrement}>incrementar</button>
                <button onClick={handleDecrement}>decrementar</button>
            </div>

            <Button onClick={openPopup === "popup" ? openPopup : closePopup}>{popupClass === "popup" ? "Abrir" : "cerrar"} popup</Button>
            <div className={popupClass}>
                <p onClick={handleClick}>Soy un pop up</p>
                <Button nombre="Cerrar" icono="❌" />
            </div>
        </section>
        </main>
    )
}