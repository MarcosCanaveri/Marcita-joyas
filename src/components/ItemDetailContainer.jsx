import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function ItemDetailContainer() {
    const params = useParams()
    const [product, setProduct] = useState({})

        useEffect(() => {
            async function getData() {
                try {
                    const resultado = await fetch(`https://dummyjson.com/products/${params.id}`)
                    const resultado2 = await resultado.json()
                    setProduct(resultado2.product)
                } catch (error) {
                    console.log(error)
                }
    
            }
    
            getData()
        }, [])
    console.log("ItemDetailContainer", resultado)

    return (
        <div>{product.title}</div>
    )
    
}