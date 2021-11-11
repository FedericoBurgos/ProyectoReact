import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBr';
import { HomeView } from './components/HomeView/HomeView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="mi-app">
    
    <NavBar />
    <ItemListContainer greeting="Bienvenidos" />
    

      <h2>Proyecto React</h2>

    
      <section>
        <p>Catalogo</p>
      </section>
    </div>
  );
}

export default App;
