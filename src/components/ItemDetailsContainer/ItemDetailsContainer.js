import { useEffect, useState } from "react"
import ItemDetails from "../ItemDetails/ItemDetails"
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { Db } from '../../Services/Firebase/firebaseConfig'

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()
    
    useEffect(() => {
       const productRef = doc(Db, 'products', productId)
       getDoc(productRef)
          .then(snapshot => {
            const data = snapshot.data()
            const productAdap = {id: snapshot.id, ...data}
            setProduct(productAdap)
          })
    }, [productId])

    return (
        <div>
           <ItemDetails {...product}/>
        </div>
    )
}

export default ItemDetailsContainer