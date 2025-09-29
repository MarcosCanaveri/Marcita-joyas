import { useState, useEffect } from "react"

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
                {products.map((products) => {
                    return <p>{products.title}</p>
                })}


                <div className="products">


                    <p>contador: {count}</p>
                    <button onClick={handleIncrement}>incrementar</button>
                    <button onClick={handleDecrement}>decrementar</button>



                </div>

            </section>
        </main>
    )
}