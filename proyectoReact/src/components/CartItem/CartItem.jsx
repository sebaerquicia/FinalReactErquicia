/* import { CartContext } from "../../context/CartContext"
import Cart from "../Cart/Cart"
 */
const CartItem = ({id, name, price, quantity}) =>{
    return(
        <div className="cart-item">

            <h3>Nombre:{name} </h3>
            <p>id: {id}</p>
            <p>Cantidad: {quantity}</p>
            <p>Precio unitario: ${price}</p>
            <p>Subtotal: ${quantity *price}</p>
        </div>
    )
}
export default CartItem