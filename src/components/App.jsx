import { Navbar } from "./Navbar"
import { ItemListContainer } from "./ItemListContainer"
import { Routes, Route } from "react-router-dom"
import { ItemDetailContainer } from "./ItemDetailContainer"
import { Footer } from "./Footer"

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
      </Routes>
      <Footer />
    </>
  )
}

export default App

