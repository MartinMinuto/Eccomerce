import './ItemCard.css'
import './Button.css'
import { Link } from 'react-router-dom'

const ItemCard = ({id, name, price, img, category}) => {
    return(
            <div className="cardContainer">
                <div className='positionContainerImg'>
                    <img className='imgContainer' src={img} alt={name}/>
                </div>
                <div className='textContainer'>
                    <div className='positionContainer'>
                        <h2 className='nameContainer'>{name}</h2>
                    </div>
                    <div className='positionContainer'>
                        <h3 className='categoryContainer'>{category}</h3>
                    </div>
                    <div className='positionContainer'>
                        <h4 className='priceContainer'>${price}</h4>
                    </div>
                    <div className='positionContainer'>
                    <Link 
                            to={`./item/${id}`}
                            className='Btn'
                        >Detalles
                    </Link>
                    </div>
                </div>
            </div>
    )

} 

export default ItemCard