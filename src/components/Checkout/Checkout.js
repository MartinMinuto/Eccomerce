import './Checkout.css'
import { useContext } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Db } from '../../Services/Firebase/firebaseConfig'
import { documentId, getDocs, query, collection, where, writeBatch } from 'firebase/firestore'

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
      const outOfStock = []
      const batch = writeBatch(Db)

      docs.forEach(doc => {
        const dataDoc = doc.data()
        const stockDb = dataDoc.stock
        const productAdd = cart.find(prod => prod.id === doc.id)
        const prodQuantity = productAdd?.quantity

        if(stockDb >= prodQuantity){
           batch.update(doc.ref, { stock: stockDb - prodQuantity})
        } else {
           outOfStock.push({id: doc, ...dataDoc})
        }
      })

    }  


    return(
        <div className='CheckoutContainer'>
             <h1>Checkout</h1>
             <a className='Btn' onClick={handleConfirm}>Confirm</a>
        </div>
    )
}

export default Checkout