import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';
import Item from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="App-main">
        <Item greet="Hello world!" />
        <img src={logo} className="App-logo" alt="logo" />
      </main>
    </div>
  );
}

export default App;