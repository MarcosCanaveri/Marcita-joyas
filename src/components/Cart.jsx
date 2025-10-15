import { db } from "../firebaseConfig"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import toast, { Toaster } from "react-hot-toast"

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

        toast.loading("Finalizando compra...")

        const consulta = addDoc(ordenesCollection, nueva_orden)

        consulta
          .then((response) => {
            toast.success("Compra realizada. Su código de compra es"+ response.id)
          })
          .catch(() =>{
            toast.error("Compra no realizada")
          })

    }

    return (
        <main className="main">
            <section className="main__section"></section>
            <h1 className="main__title">Carrito de compras</h1>
            <button onClick={handlePrueba}>Finalizar compra</button>
        </main>
    )
}