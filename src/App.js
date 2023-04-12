import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Banner from './components/Banner/Banner';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext';
import { useEffect, useState } from 'react';
import NavbarMobile from './components/NavbarMobile/NavbarMobile';
import Footer from './components/Footer/Footer'
import CartPage from './components/CartPage/CartPage';
import Checkout from './components/Checkout/Checkout'
import Login from './components/Login/Login';


function DesktopView() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
              <NavBar/>
              <Banner/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>}/>
                <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                <Route path='/item/:productId' element={<ItemDetailsContainer/>}/>
                <Route path='/Login' element={<Login/>}/>
                <Route path='/cart' element={<CartPage/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
              </Routes>
              <Footer/>
        </BrowserRouter>  
      </CartProvider>
    </div>
  );
}

function MobileView() {
  return (
    <div>
      <CartProvider>
          <BrowserRouter>
                <NavbarMobile/>
                <Banner/>
                <Routes>
                  <Route path='/' element={<ItemListContainer/>}/>
                  <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                  <Route path='/item/:productId' element={<ItemDetailsContainer/>}/>
                  <Route path='/Login' element={<Login/>}/>
                  <Route path='/cart' element={<CartPage/>}/>
                  <Route path='/checkout' element={<Checkout/>}/>
                </Routes>
                <Footer/>
          </BrowserRouter>  
      </CartProvider>
    </div>
  );
}


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 770) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? <MobileView /> : <DesktopView />}
    </div>
  );
}

export default App;