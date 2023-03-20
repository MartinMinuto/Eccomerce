import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProducts, getProductsByCategory } from '../../AsyncMock'
import { useParams } from 'react-router-dom'

const ItemListContainer = (() =>{
  const[products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
     const asyncFunction = categoryId ? getProductsByCategory : getProducts;

     asyncFunction(categoryId)
      .then(products => {
           setProducts(products)
      })
  }, [categoryId])

    return (
      <ItemList products={products}/> 
    )
})

export default ItemListContainer