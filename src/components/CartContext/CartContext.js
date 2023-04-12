import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = ({children}) =>{
        const [cart, setCart] = useState([])

        const addItem = (productToAdd) => {
            if(!isInCart(productToAdd.id)) {
                setCart(prev => [...prev, productToAdd])
            } else {
                const updateCart = cart.map(prod => {
                    if(prod.id === productToAdd.id) {
                        return {...prod, quantity: productToAdd.quantity}
                    } else {
                        return prod
                    }
                })

                setCart(updateCart)
            }
        }

        const removeItem = (id) => {
           const cartUpdate = cart.filter(prod => prod.id !== id)
           setCart(cartUpdate)
        }

        const isInCart = (id) => {
            return cart.some(prod => prod.id === id)
        }

        const getTotalQuantity = () => {
           let totalQuantity = 0
           cart.forEach(prod => {
            totalQuantity += prod.quantity
           })
           return totalQuantity
        }

        const totalQuantity = getTotalQuantity()

        const clearCart = () => {
            setCart([])
        }


        return(
            <CartContext.Provider value={{cart, addItem, removeItem, totalQuantity, clearCart}}>
              {children}
            </CartContext.Provider>
            )
}