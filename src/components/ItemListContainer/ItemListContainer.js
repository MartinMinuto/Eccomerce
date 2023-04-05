import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where } from 'firebase/firestore'
import { Db } from '../../Services/Firebase/firebaseConfig'

const ItemListContainer = (() =>{
  const[products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {
    const productsRef = categoryId
      ? query(collection(Db, 'products'), where('category', '==', categoryId))
      : collection(Db, 'products')

    getDocs(productsRef)
       .then(snapshot => {
          const productsAdapted = snapshot.docs.map(doc => {
            const data = doc.data()
            return { id: doc.id, ...data } 
          })
          setProducts(productsAdapted)
       })
  }, [categoryId])

    return (
      <ItemList products={products}/> 
    )
})

export default ItemListContainer