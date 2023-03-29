import logo from "../../../assets/logo.png"
import logo_search from "../../../assets/search.png"
import carrito from "../../../assets/carrito-de-compras.png"
import styled from "./Head.module.css"
const Head = () => {
    return (
        <div className={styled.container}>
            <img className={styled.logo} src={logo}></img>
            <form>
                <input className={styled.search} type="text"></input>
                <div className={styled.container_search}><img className={styled.logo_search} src={logo_search}></img></div>
            </form>
            <div className={styled.container_cart}>
                <div className={styled.box_cart}>
                    <img src={carrito} className={styled.cart}></img>
                    <p className={styled.counter}>0</p>
                </div>
                <p>Mi compra</p>
            </div>
        </div>
    )
}
export default Head