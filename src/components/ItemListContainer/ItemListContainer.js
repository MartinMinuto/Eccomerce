import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts } from '../../AsyncMock'

const ItemListContainer = (() =>{
  const[products, setProducts] = useState([])

  useEffect(() => {
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