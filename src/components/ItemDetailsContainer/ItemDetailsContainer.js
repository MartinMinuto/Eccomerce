import { getProductsById } from "../../AsyncMock"
import { useEffect, useState } from "react"
import ItemDetails from "../ItemDetails/ItemDetails"

const ItemDetailsContainer = () => {
    const [product, setProduct] = useState()
    
    useEffect(() => {
        getProductsById('1')
            .then(product => {
               setProduct(product)
            })
    }, [])

    return (
        <div>
           <ItemDetails {...product}/>
        </div>
    )
}

export default ItemDetailsContainer