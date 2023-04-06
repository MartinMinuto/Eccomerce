import './NavbarMobile.css'
import Cart from '../Cart/Cart'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const NavbarMobile = () => {
    const [showMenu, setShowMenu] = useState(false);
      
    const handleMenuToggle = () => {
      setShowMenu(!showMenu);
    };
      
        return (
          <nav>
            <div className="NavbarMobile">
              <Link to="/" className="TitleMobile">Ecommerce</Link>
              <button className="MenuButton" onClick={handleMenuToggle}>
                <span className="MenuButtonIcon"></span>
              </button>
              <div className={`NavContainerMobile ${showMenu ? 'active' : ''}`}>
                <ul className="ulNavMobile">
                  <li className="liNavMobile"><Link className="itemNavMobile" to="/">Home</Link></li>
                  <li className="liNavMobile"><Link className="itemNavMobile" to="/category/Procesador">Procesadores</Link></li>
                  <li className="liNavMobile"><Link className="itemNavMobile" to="/category/Memoria">Memoria Ram</Link></li>
                  <li className="liNavMobile"><Link className="itemNavMobile" to="/category/Placas de video">Tarjetas graficas</Link></li>
                </ul>
              </div>
              <Cart/>
            </div>
          </nav>
        );
}


export default NavbarMobile