import { useState } from "react"
import { Link } from "react-router-dom"

export function ItemListContainer() {
    //acciones    

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    //vista
    return (
        <main className="main">

            <section className="main__section">
                <h2 className="main__title">Soy el item list container</h2>

                <div className="products">


                    <p>contador: {count}</p>
                    <button onClick={handleIncrement}>incrementar</button>
                    <button onClick={handleDecrement}>decrementar</button>



                </div>

            </section>
        </main>
    )
}