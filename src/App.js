import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main className="App-main">
          <Routes>
            <Route path="/" element={<ItemListContainer greet="Welcome!"/>} />
            <Route path="/detail/:id" element={<ItemDetailContainer />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;