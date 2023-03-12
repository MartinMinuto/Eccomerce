import './ItemCard.css'

const ItemCard = ({name, price, img, category}) => {
    return(
            <div className="cardContainer">
                <img className='imgContainer' src={img}/>
                <div className='textContainer'>
                    <h2>{name}</h2>
                    <h3>{category}</h3>
                    <h4>${price}</h4>
                </div>
            </div>
    )

} 

export default ItemCard