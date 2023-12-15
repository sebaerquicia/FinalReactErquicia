import { useCartContext } from "../../context/CartContext"
import Cart from "../Cart/Cart"

const CartItem = ({product}) =>{
    const {removeItem} = useCartContext()
    return(
        <div>
            <p>Nombre:{product.name} </p>
            <p>Cantidad: {product.quantity}</p>
            <p>Precio unitario: ${product.price}</p>
            <p>Subtotal: ${product.quantity * product.price}</p>
            <button onClick={()=> removeItem(product.id)}>Eliminar</button>
        </div>
    )
}
export default CartItem