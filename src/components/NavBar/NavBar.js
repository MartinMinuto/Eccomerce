import './NavBar.css'
import Cart from '../Cart/Cart'

const NavBar = () =>{
    return (
        <nav>
           <div  className='Navbar'>
                <h1 className='Title'>Ecommerce</h1>
                <div className='NavContainer'>
                      <ul className='ulNav'>
                        <li className='liNav'><a className='itemNav' href='#'>Home</a></li>
                        <li className='liNav'><a className='itemNav' href='#'>About us</a></li>
                        <li className='liNav'><a className='itemNav' href='#'>Shop</a></li>
                      </ul>
                </div>
                <Cart quantity='3'/>
            </div>    
        </nav>
    )
}

export default NavBar