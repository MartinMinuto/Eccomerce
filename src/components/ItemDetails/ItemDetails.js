import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetails.css'
import { CartContext } from '../CartContext/CartContext'


const ItemDetails = ({id, name, price, img, category, stock}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
      const productToAdd = {
        id, name, price, quantity
      }
      setQuantity(quantity)
      addItem(productToAdd)
    }


    return (
        <div>
           <div className='detailsContainer'>
                <img className='detailsImg' src={`${img}`} alt={name}/>
                <div className='detailsSubContainer'>
                  <div className='detailsPositionContainer'>
                    <h1 className='detailsName'>{name}</h1>
                  </div>
                  <div className='detailsPositionContainer'> 
                    <h2 className='detailsCategory'>{category}</h2>
                  </div>  
                  <div className='detailsPositionContainer'>  
                    <h3 className='detailsPrice'>$ {price}</h3>
                  </div>  
                  <div className='detailsPositionContainer'> 
                    <ItemCount onAdd={handleOnAdd} stock={stock}/>
                   </div> 
                </div>
            </div>  
        </div>
    )
}

export default ItemDetails