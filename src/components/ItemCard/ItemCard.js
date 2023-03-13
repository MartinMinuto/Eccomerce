import './ItemCard.css'
import Button from '../Button/Button'

const ItemCard = ({name, price, img, category}) => {
    return(
            <div className="cardContainer">
                <img className='imgContainer' src={img}/>
                <div className='textContainer'>
                    <h2 className='nameContainer'>{name}</h2>
                    <h3 className='categoryContainer'>{category}</h3>
                    <h4 className='priceContainer'>${price}</h4>
                    <Button textLabel='Comprar' className='Btn'/>
                </div>
            </div>
    )

} 

export default ItemCard