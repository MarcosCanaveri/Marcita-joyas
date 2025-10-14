import { Navbar } from "./Navbar"
import { ItemListContainer } from "./ItemListContainer"
import { Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { Footer } from "./Footer"
import { Cart } from "./Cart"
import { db } from "../firebaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { Button } from "antd"




function App() {

  const handlePrueba = () => {

    const productoCollection = collection(db, "productos")

    const consulta = addDoc(productoCollection,{
      id: 1,
      nombre: "producto",
      precio: 100,
    })

  }


  return (
    <>
      <Navbar />
      <Button onClick={handlePrueba}>prueba</Button>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<p>Soy el producto</p>} />
        <Route path="/acero" element={<p>Soy el acero</p>} />
        <Route path="/plata" element={<p>Soy el plata</p>} />
        <Route path="/product/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart />} />    
      </Routes>
      <Footer />
    </>
  )
}

export default App

