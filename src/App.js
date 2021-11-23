import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBr';
import { HomeView } from './components/HomeView/HomeView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter } from 'react-router-dom';
import { CartView } from './components/CartView';

function App() {
  return (
    <div className="mi-app">
    <BrowserRouter>
    <NavBar />

    <Routes>
      <Route path="/" element ={<ItemListContainer/>} />
      <Route path="/productos" element ={<ItemListContainer/>} />
      <Route path="/detail:proId" element ={<ItemDetailContainer /> } />
      <Route path="/cart" element ={<CartView />} />
      </Routes>
  
    <ItemDetailContainer />

    </BrowserRouter>
    

      <h2>Proyecto React</h2>

    
      <section>
        <p>Catalogo</p>
      </section>
    </div>
  );
}

export default App;
