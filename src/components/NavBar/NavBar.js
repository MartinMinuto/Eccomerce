import './NavBar.css'
import Cart from '../Cart/Cart'
import {Link} from 'react-router-dom'

const NavBar = () =>{
    return (
        <nav>
           <div  className='Navbar'>
                <h1 className='Title'>Ecommerce</h1>
                <div className='NavContainer'>
                      <ul className='ulNav'>
                        <li className='liNav'><Link className='itemNav' to='/'>Home</Link></li>
                        <li className='liNav'><Link className='itemNav' to='/category/Procesador'>Procesadores</Link></li>
                        <li className='liNav'><Link className='itemNav' to='/category/Memoria'>Memoria Ram</Link></li>
                        <li className='liNav'><Link className='itemNav' to='/category/Placas de video'>Tarjetas graficas</Link></li>
                      </ul>
                </div>
                <Cart quantity='3'/>
            </div>    
        </nav>
    )
}

export default NavBar