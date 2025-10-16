import { Link } from "react-router-dom"
import { Card } from "antd"

export function Item(props){

return (
    <Card
    title={props.product.title}
    description={props.product.description}
    category={props.product.category}
    price={props.product.price}
    actions={[
        <Link to={`/product/${props.product.name}`}>ver detalle</Link>
    ]}
    >
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.category}</p>
        <p>{product.price}</p>
    </Card>
)
}