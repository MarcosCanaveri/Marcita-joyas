import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export function ItemListContainer() {

    const [products, setProducts] = useState([])
    const resultado = useParams()
    console.log("ItemDetailContainer - resultado:", resultado)

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


    //vista
    return (
        <main className="main">

            <section className="main__section">
                <h2 className="main__title">Soy el item list container</h2>
                <div className="products">
                {products.map((product) => {
                    return (
                    <article className="product">
                        <h3>{product.title}</h3>
                        <p>{product.description}</p>
                        <Link to={`/product/${product.id}`}>Ver detalle</Link>
                        </article>
                    )
                })}
                </div>

            </section>
        </main>
    )
}