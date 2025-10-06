import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export function ItemDetailContainer() {
    const params = useParams()
    const [product, setProduct] = useState({})

        useEffect(() => {
            async function getData() {
                try {
                    const resultado = await fetch(`https://dummyjson.com/product/${params.id}`)
                    const resultado2 = await resultado.json()
                    setProduct(resultado2)
                } catch (error) {
                    console.log(error)
                }
    
            }
    
            getData()
        }, [])

    return (
        <h1>{product.title}</h1>

    )
}
