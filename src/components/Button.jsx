export function Button(props) {

    return (
        <button className="btn">
            {props.icono}
            {props.nombre}            
        </button>
    )
}