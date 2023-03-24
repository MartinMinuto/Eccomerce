import './Cart.css'
import { FaCartPlus } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';

const Cart = () => {
   const { totalQuantity } = useContext(CartContext)

    return (
        <div to='/cart' className='Cart'>
          <FaCartPlus className='CartIcon'/>
           {totalQuantity}
        </div>
    )
}

export default Cart