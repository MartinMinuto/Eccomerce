import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { Link } from 'react-router-dom'
import './CartPage.css'

const CartPage = () => {
    const { cart } = useContext(CartContext)

    const getTotal = () => {
      let total = 0
      cart.forEach(prod => {
      total += prod.quantity * prod.price
      })
      return total
    }

    return(
        <div className="ContainerMain">
            <h1 className="ContainerTitle">Cart</h1>
            <div className="ContainerCart">
            {
                cart.map(prod => {
                    return (
                        <div key={prod.id}>
                          <h1>- {prod.name} x {prod.quantity} : ${prod.quantity * prod.price} -</h1> 
                        </div>
                    )
                })
            }
            </div>
            <h3 className="Total">Total ${getTotal()}</h3>
            <Link className="Link" to='/checkout'>Finalizar Compra</Link>
        </div>
    )
}

export default CartPage