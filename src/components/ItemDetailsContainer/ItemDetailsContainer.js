import { getProductsById } from "../../AsyncMock"
import { useEffect, useState } from "react"
import ItemDetails from "../ItemDetails/ItemDetails"
import { useParams } from "react-router-dom"

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()
    
    useEffect(() => {
        getProductsById(productId)
            .then(product => {
               setProduct(product)
            })
    }, [productId])

    return (
        <div>
           <ItemDetails {...product}/>
        </div>
    )
}

export default ItemDetailsContainer