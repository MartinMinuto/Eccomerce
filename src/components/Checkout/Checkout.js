import './Checkout.css'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Db } from '../../Services/Firebase/firebaseConfig'
import { documentId, getDocs, query, collection, where } from 'firebase/firestore'

const Checkout = () => {
   const { cart, total } = useContext(CartContext)

   const handleConfirm = async (userData) => { 
      const objOrder = {
        buyer: {},
        items: cart,
        total: total,
      }

      const ids = cart.map(prod => prod.id)

      const productsRef = query(collection(Db, 'products'), where(documentId(), 'in', ids))
      
      const productsAdd = await getDocs(productsRef)

      const { docs } = productsAdd

    }  


    return(
        <div className='CheckoutContainer'>
             <h1>Checkout</h1>
             <a className='Btn' onClick={handleConfirm}>Confirm</a>
        </div>
    )
}

export default Checkout