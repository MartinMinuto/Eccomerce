import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"

const CartPage = () => {
    const { cart } = useContext(CartContext)

    return(
        <div>
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                          {prod.name}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartPage