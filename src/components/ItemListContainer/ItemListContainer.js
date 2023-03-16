import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = (() =>{
  const[products, setProducts] = useState([])

  useEffect(() => {
      fetch('https://api.mercadolibre.com/sites/MLA/search?q=TelefonoIphone')
       .then(response => {
         return response.json()
       })
       .then(json => {
            setProducts(json.results)
            console.log(json.results)
       })
  }, [])

    return (
      <ItemList products={products}/> 
    )
})

export default ItemListContainer