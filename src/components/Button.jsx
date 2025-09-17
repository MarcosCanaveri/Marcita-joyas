export function Button(props) {

return ( 
    <button className="btn">
        ◯
        {props.nombre}
        {props.icono}
    </button>
)
}