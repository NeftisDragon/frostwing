import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="App-main">
        <ItemListContainer greet="Hello world!" />
      </main>
    </div>
  );
}

export default App;