import { Navbar } from "./Navbar"
import { ItemListContainer } from "./ItemListContainer"
import { Button } from "./Button"

function App() {
  
  return (
  <div>
    <Navbar />
    <Button nombre="Home" icono="🏠" />
    <Button nombre="Productos" icono="🔍"/>
    <Button nombre="Acero" icono="💍" />
    <Button nombre="Plata" icono="💎"/>
    <ItemListContainer mensaje ="Bienvenido a Marcita joyas"/>
  </div>
  )
}

export default App

