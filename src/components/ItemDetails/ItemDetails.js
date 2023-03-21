import { Link } from 'react-router-dom'
import './ItemDetails.css'

const ItemDetails = ({id, name, price, img, category}) => {
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
                        <Link 
                            to={`./item/${id}`}
                            className='detailsBtn'
                            >Comprar
                        </Link>
                   </div> 
                </div>
            </div>  
        </div>
    )
}

export default ItemDetails