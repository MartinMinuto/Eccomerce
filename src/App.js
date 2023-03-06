import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemlistContainer from './components/Greeting/Greeting'



function App() {
  return (
    <div className="App">
     <NavBar/>
     <ItemlistContainer Greeting={'Bienvenidos a mi web!!'}/>
    </div>
  );
}

export default App;
