
import './App.css';
import Header from './components/Head/Header';
import Home from './components/Head/Home';
import Checkout from './components/Head/Checkout';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ProductProvider } from './components/ProductContext';


function App() {
  return (
    <div className="App">
      <ProductProvider>
          <BrowserRouter>
              <Header/>
                <Routes>
                  <Route path='/' element= {<Home/>} />
                  <Route path='/checkout' element= {<Checkout/>} />
                </Routes>
          </BrowserRouter>
      </ProductProvider>
    </div>
  );
}

export default App;
