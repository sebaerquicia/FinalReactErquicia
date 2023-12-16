/* 
import { writeBatch } from "firebase/firestore";
import { db } from "../../firebase/client";

import CheckoutForm from '..CheckoutForm/CheckoutForm'

const Checkout = () => {
    const [loading, setLoading] = useStaste(false)
    const [orderId, setOrderId] = useState('')

    const {cart, total, clearCart } = useContext(CartContext)

    const createOrder = async ({namse, phone, email}) => {
        setLoading(true)

        try{
            const objOrder = {
                buyer:{
                    name, phone, email
                },
                items: cart,
                total: total,
                date: Timestamp.fromDate(new Date())
            }
            const batch = writeBatch(db)

            const outOfStock = []
        }
    }
} */