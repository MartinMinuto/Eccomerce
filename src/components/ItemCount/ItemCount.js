import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {
   const [quantity, setQuantity] = useState(initial)

   const increment = () => {
     if(quantity < stock) {
        setQuantity(quantity+1)
     }
   }

   const decrement = () => {
    if (quantity > 1){
        setQuantity(quantity -1)
    }
   }

   return (
      <div className='CountConainer'>
         <div className='BtnContainer'> 
            <button className='detailsBtn' onClick={decrement}>-</button>
            <h4 className='number'>{quantity}</h4>
            <button className='detailsBtn' onClick={increment}>+</button>
         </div>
         <div>
            <button id='BtnAgregar' className='detailsBtn' onClick={() => onAdd(quantity)}>Agregar al Carrito</button>
        </div>
      </div>
   )
}

export default ItemCount