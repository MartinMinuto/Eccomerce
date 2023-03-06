import './Cart.css'
import { FaCartPlus } from 'react-icons/fa';

const Cart = (props) => {
    return (
        <div className='Cart'>
          <FaCartPlus className='CartIcon'/>
          <p className='CartQuantity'>{props.quantity}</p>
        </div>
    )
}

export default Cart