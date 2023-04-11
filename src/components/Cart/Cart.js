import './Cart.css'
import { FaCartPlus } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
   const { totalQuantity} = useContext(CartContext)

   const navigate = useNavigate()

    return (
        <div className='Cart' onClick={() => navigate('/cart')}>
          <FaCartPlus className='CartIcon'/>
           {totalQuantity}
        </div>
    )
}

export default Cart