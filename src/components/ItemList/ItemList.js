import ItemCard from '../ItemCard/ItemCard'
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
       <div className='containerMain'> 
         {       
            products.map(product =>{
                return  <ItemCard key={product.id} {...product}/>
            
            })
         }  
       </div>  
    )
}

export default ItemList