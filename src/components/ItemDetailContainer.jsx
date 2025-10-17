import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { ItemDetail } from "./ItemDetail"
import { db } from "../firebaseConfig"
import { collection, doc, getDoc, getDocs, where, query } from "firebase/firestore"


export function ItemDetailContainer() {
    const params = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        async function getSingleProduct() {
            try {
                /*const resultado = await fetch(`https://dummyjson.com/product/${params.id}`)
                const resultado2 = await resultado.json()
                setProduct(resultado2)*/
                const productosCollection = collection(db, "productos")

                const filtro = doc(productosCollection, "4z87KIddyZNxHhVko36c")

                const consulta = await getDoc(filtro)
                
                setProduct(consulta.data())

                toast.dismiss()
                toast.success("Datos cargados correctamente")
            } catch (error) {
                console.log(error)
                toast.dismiss()
                toast.error("Error al cargar datos")
            }


        }

        getSingleProduct()

                async function getSingleProductByDocs() {
            try {
                /*const resultado = await fetch(`https://dummyjson.com/product/${params.id}`)
                const resultado2 = await resultado.json()
                setProduct(resultado2)*/
                const productosCollection = collection(db, "productos")

                const filtro = query(productosCollection, where("id", "==", 1))

                const consulta = await getDocs(filtro)

                const producto ={}

                consulta.docs.forEach((doc) => {
                    const data = doc.data()
                    const keys = Object.keys(data)
                    keys.forEach((key) => {
                        producto[key] = data[key]
                    })
                })

                setProduct(producto)
                
                

                toast.dismiss()
                toast.success("Datos cargados correctamente")
            } catch (error) {
                console.log(error)
                toast.dismiss()
                toast.error("Error al cargar datos")
            }


        }
        getSingleProductByDocs()
    }, [])

    return (
        <ItemDetail product={product} />
    )
}
