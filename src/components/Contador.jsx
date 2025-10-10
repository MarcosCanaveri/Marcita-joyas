import { Button } from "antd"
import { MinusOutlined, PlusOutlined } from "@ant-design/icons"

export function Contador(props) {

    const handleClick = () => {
        props.handle("1")
    }
    return (
        <div>
            <Button
            type="primary"
            shape="circle"
            icon={<PlusOutlined />}
            onClick={handleClick}
            />
            <p>Cantidad seleccionada: 0</p>
             <Button
            type="primary"
            shape="circle"
            icon={<MinusOutlined />}
            onClick={props.handle}
            />
            </div>


    )
}

/*    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }


<div className="products">


                    <p>contador: {count}</p>
                    <button onClick={handleIncrement}>incrementar</button>
                    <button onClick={handleDecrement}>decrementar</button>



                </div>*/