import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export function ItemListContainer() {

    const [products, setProducts] = useState([])
    console.log(products)

    useEffect(() => {
        async function getData() {
            try {
                const resultado = await fetch("https://dummyjson.com/products")
                const resultado2 = await resultado.json()
                setProducts(resultado2.products)
            } catch (error) {
                console.log(error)
            }

        }

        getData()
    }, [])


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
                {products.map((products) => {
                    return (
                    <article className="product">
                        <h3>{products.title}</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Link to={'/product/${product.id}'}>Ver detalle</Link>
                        </article>
                    )
                })}
                </div>


                <div className="products">


                    <p>contador: {count}</p>
                    <button onClick={handleIncrement}>incrementar</button>
                    <button onClick={handleDecrement}>decrementar</button>



                </div>

            </section>
        </main>
    )
}