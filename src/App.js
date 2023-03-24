import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Banner from './components/Banner/Banner';
import ItemDetailsContainer from './components/ItemDetailsContainer/ItemDetailsContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext/CartContext';

function App() {
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

export default App;
