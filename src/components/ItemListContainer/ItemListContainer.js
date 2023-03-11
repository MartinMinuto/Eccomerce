import { useEffect, useEffect, useState } from 'react'
import {getProducts} from '../../AsyncMock'

const ItemListContainer = (() =>{
    const [products, setProducts] = useState([])
      
    useEffect(() =>{
        getProducts()
           .then(products => {
              setProducts(products)
           })
    }, [])

    const arrayProducts = products.map(product =>{
        
    })
})

export default ItemListContainer