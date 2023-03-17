import { getProductsById } from "../../AsyncMock"
import { useEffect, useState } from "react"
import ItemDetails from "../ItemDetails/ItemDetails"
import { useParams } from "react-router-dom"

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState()

    const { itemId } = useParams()
    
    useEffect(() => {
        getProductsById(itemId)
            .then(product => {
               setProduct(product)
            })
    }, [itemId])

    return (
        <div>
           <ItemDetails {...product}/>
        </div>
    )
}

export default ItemDetailsContainer