import { Link } from 'react-router-dom'

const ItemDetails = ({id, name, price, img, category}) => {
    return (
        <div>
           <div>
                <img src={`${img}`} alt={name}/>
                <div>
                    <h1>{name}</h1>
                    <h2>{category}</h2>
                    <h3>{price}</h3>
                    <Link 
                        to={`./item/${id}`}
                        >Comprar
                    </Link>
                </div>
            </div>  
        </div>
    )
}

export default ItemDetails