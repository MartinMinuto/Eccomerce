import './Checkout.css'
import { useContext, useState } from 'react'
import { CartContext } from '../CartContext/CartContext'
import { Db } from '../../Services/Firebase/firebaseConfig'
import { documentId, getDocs, query, collection, where, writeBatch, addDoc } from 'firebase/firestore'
import Login from '../Login/Login'

const Checkout = () => {
   const [order, setOrden] = useState('')
   const [user, setUser] = useState(null);
   const { cart, clearCart } = useContext(CartContext)

   const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };


   const handleConfirm = async () => { 
      const objOrder = {
        buyer: user,
        items: cart
      }

      const ids = cart.map(prod => prod.id);
      if (!ids || ids.length === 0) {
      console.error("No hay productos en el carrito");
      return;
      }
      if (!Db) {
      console.error("Error en Firebase");
      return;
      }
      if (!user) {
      console.error("No hay usuario logueado");
      return;
      }

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

      if(outOfStock.length === 0){
        batch.commit()

        const orderRef = collection(Db, 'orders')
        const ordenAdd = await addDoc(orderRef, objOrder)

      clearCart()
      setOrden(ordenAdd.id)
      } else {
          console.log('No hay items')
      }

    };

    return (
        <div className='CheckoutContainer'>
          {user ? (
            <div>
              <h1>Checkout</h1>
              <h2>Bienvenido {user.email}!</h2>
              <h2>El id es :{order}</h2>
              <button className='Btn' onClick={handleLogout}>Logout</button>
              <button className='Btn' onClick={handleConfirm}>Confirm</button>
            </div>
          ) : (
            <div>
              <h1>Checkout</h1>
              <Login handleLogin={handleLogin} />
            </div>
          )}
        </div>
      );
}

export default Checkout