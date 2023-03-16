// import { useEffect, useState } from 'react'
// import { getProducts } from '../../../AsyncMock'

// const NavItemList = (() =>{
//     const [products, setProducts] = useState([])
//     const [input, setInput] = useState('')
      
//     useEffect(() =>{
//         getProducts()
//            .then(products => {
//               setProducts(products)
//            })
//     }, [])

//     const handleSubmit = (e) => {
//          e.preventDefault()
//     }

//     return (
//         <div className='searchContainerMain'> 
//         {       
//            products.map(product =>{
//                return (
//                 <div onSubmit={handleSubmit}>
//                     <input value={input} onChange={e => setInput(e.target.value)}/>
//                     <button>Search</button>
//                 </div>
//                )
           
//            })
//         }  
//       </div>  
      
//     )
// })

// export default NavItemList