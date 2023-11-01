import cart from './assets/cart.svg'
import { fotoCarrito } from "./assets/cart.module.css"
const CartWidget = () => {
    return (
        <div>
            <img src={cart} alt="cart-widget" className={fotoCarrito} />
            0
        </div>
    )
}
export default CartWidget