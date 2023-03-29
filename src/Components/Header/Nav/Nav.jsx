import React from "react"
import styled from "./Nav.module.css"

const Nav = () => {
    return (
        <nav className={styled.Nav}>
            <ul className={styled.Ul}>
                <li>Inicio</li>
                <li>Libros</li>
                <li>Otros Productos</li>
                <li>Búsqueda Avanzada</li>
                <li>Novedades</li>
                <li>Outlet</li>
                <li>Primer item</li>
                <li>3x2m</li>
                <li>PREVENTAS</li>
            </ul>
        </nav>
    )
}
export default Nav