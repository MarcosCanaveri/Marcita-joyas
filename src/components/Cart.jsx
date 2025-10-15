import { db } from "../firebaseConfig"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

export function Cart() {

    const handlePrueba = () => {

        const nueva_orden = {
            usuario : {
                nombre : "Diego",
                email : "diego@gmail.com"
            },
            fecha_compra : serverTimestamp(),
            items : []
        }

        const ordenesCollection = collection(db, "ordenes")

        const consulta = addDoc(ordenesCollection, nueva_orden)

    }

    return (
        <main className="main">
            <section className="main__section"></section>
            <h1 className="main__title">Carrito de compras</h1>
            <button onClick={handlePrueba}>Confirm</button>
        </main>
    )
}