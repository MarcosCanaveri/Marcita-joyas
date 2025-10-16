import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import toast from "react-hot-toast"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebaseConfig"

export function ItemListContainer() {

    const [products, setProducts] = useState([])
    const resultado = useParams()

    useEffect(() => {
        toast.loading("Cargando...")
        async function getData() {
            try {
                /*const resultado = await fetch("https://dummyjson.com/products")
                const resultado2 = await resultado.json()
                setProducts(resultado2.products)*/
                const productosCollection =  collection(db,"productos")

                const consulta = await getDocs(productosCollection)

                const productos = []

                consulta.docs.forEach((doc) => {
                    productos.push(doc.data())
                })

                setProducts(productos)


                toast.dismiss()
                toast.success("Datos cargados correctamente")
            } catch (error) {
                console.log(error)
                toast.dismiss()
                toast.error("Error al cargar datos")
            }

        }

                async function getDataByCategory() {
            try {

                const productosCollection =  collection(db,"productos")

                const filtro = query (productosCollection, where("category","==","acero"))
                
                const consulta = await getDocs(filtro)

                const productos = []

                consulta.docs.forEach((doc) => {
                    productos.push(doc.data())
                })

                setProducts(productos)


                toast.dismiss()
                toast.success("Datos cargados correctamente")
            } catch (error) {
                console.log(error)
                toast.dismiss()
                toast.error("Error al cargar datos")
            }

        }

        getDataByCategory()
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
                        <p>{product.category}</p>
                        <p>{product.price}</p>
                        <Link to={`/product/${product.id}`}>Ver detalle</Link>
                        </article>
                    )
                })}
                </div>

            </section>
        </main>
    )
}