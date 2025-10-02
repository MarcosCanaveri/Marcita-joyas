import { Cartwidget } from "./CartWidget";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <header className="header">
            <h1 className="header__title">Marcita joyas</h1>
        <nav className="header__nav nav">
            <Link className="header__link nav__link" to="/">Home</Link>
            <Link className="header__link nav__link" to="/productos">Productos</Link>
            <Link className="header__link nav__link" to="/acero">Acero</Link>
            <Link className="header__link nav__link" to="/plata">Plata</Link>
            <Cartwidget />
        </nav>
        </header>
    )
}



