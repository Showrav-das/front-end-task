import './App.css';
import Inventory from './pages/Inventory/Inventory';
import Navbar from './pages/NavigationBar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Inventory/>
    </div>
  );
}

export default App;
