import './styles/App.css';
import NavBar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart.jsx';
import { MyProvider } from './utils/Context.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyProvider>
          <NavBar />
          <main className="App-main">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/detail/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <section>
              <p className="disclaimer">Copyright Disclaimer Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted by copyright statute that might otherwise be infringing. Non-profit, educational or personal use tips the balance in favor of fair use.</p>
              <p className="copyright">© 2022 FrostWing Hardware Solutions.</p>
            </section>
          </main>
        </MyProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;