import './NavBar.css'
import Button from '../Button/Button'
import Cart from '../Cart/Cart'

const NavBar = () =>{
    return (
        <nav>
           <div  className='Navbar'>
                <h1 className='Title'>Ecommerce</h1>
                <div className='NavContainer'>
                        <Button textLabel='Inicio'/>
                        <Button textLabel='Contacto'/>
                        <Button textLabel='Shop'/>
                </div>
                <Cart quantity='3'/>
            </div>    
        </nav>
    )
}

export default NavBar