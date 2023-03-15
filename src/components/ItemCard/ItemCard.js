import './ItemCard.css'
import Button from '../Button/Button'

const ItemCard = ({name, price, img, category}) => {
    return(
            <div className="cardContainer">
                <img className='imgContainer' src={img}/>
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
                    <Button textLabel='Comprar' className='Btn'/>
                    </div>
                </div>
            </div>
    )

} 

export default ItemCard