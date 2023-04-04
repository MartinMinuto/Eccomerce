import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Banner from './components/Banner/Banner';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext';
import { useEffect, useState } from 'react';


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
              </Routes>
        </BrowserRouter>  
      </CartProvider>
    </div>
  );
}

function MobileView() {
  return (
    <div>
    </div>
  );
}


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
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