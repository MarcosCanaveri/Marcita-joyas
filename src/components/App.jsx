import { Navbar } from "./Navbar"
import { ItemListContainer } from "./ItemListContainer"
import { Toaster } from "react-hot-toast"
import { Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { Footer } from "./Footer"
import { Cart } from "./Cart"





function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/productos" element={<p>Soy el producto</p>} />
        <Route path="/acero" element={<p>Soy el acero</p>} />
        <Route path="/plata" element={<p>Soy el plata</p>} />
        <Route path="/product/:id" element={<ItemDetailContainer/>} />
        <Route path="/cart" element={<Cart />} />    
      </Routes>
      <Footer />
      <Toaster />
    </>
  )
}

export default App

