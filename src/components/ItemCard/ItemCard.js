import './ItemCard.css'
import Button from '../Button/Button'

const ItemCard = ({title, price, thumbnail, condition}) => {
    return(
            <div className="cardContainer">
                <div className='positionContainerImg'>
                    <img className='imgContainer' src={thumbnail}/>
                </div>
                <div className='textContainer'>
                    <div className='positionContainer'>
                        <h2 className='nameContainer'>{title}</h2>
                    </div>
                    <div className='positionContainer'>
                        <h3 className='categoryContainer'>{condition}</h3>
                    </div>
                    <div className='positionContainer'>
                        <h4 className='priceContainer'>${price}</h4>
                    </div>
                    <div className='positionContainer'>
                    <Button textLabel='Comprar' className='Btn'/>
                    </div>
                </div>
            </div>
    )

} 

export default ItemCard