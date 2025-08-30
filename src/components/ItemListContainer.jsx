import { Button } from "./Button";

export function Itemlistcontainer(props) {
const handleClick = () => {
    console.log("Hola");
}

    return (
        <section>
            <h2>{props.mensaje}</h2>

            <div className="popup">
                <p onClick={handleClick}>Soy un pop up</p>
                <Button nombre="Cerrar" icono="X" />
            </div>
        </section>
    )
}