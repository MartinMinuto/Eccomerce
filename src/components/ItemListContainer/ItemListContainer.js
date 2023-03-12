import { useEffect, useState } from 'react'
import { getProducts } from '../../AsyncMock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (() =>{
    const [products, setProducts] = useState([])
      
    useEffect(() =>{
        getProducts()
           .then(products => {
              setProducts(products)
           })
    }, [])

    return (
      <ItemList products={products}/> 
    )
})

export default ItemListContainer