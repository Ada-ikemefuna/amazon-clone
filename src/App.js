
import './App.css';
import Header from './components/Head/Header';
import Home from './components/Head/Home';
import Checkout from './components/Head/Checkout';
import {StateProvider} from "./components/StateProvider";


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <StateProvider>
        <BrowserRouter>
            <Header/>
              <Routes>
                <Route path='/' element= {<Home/>} />
                <Route path='/checkout' element= {<Checkout/>} />
              </Routes>
        </BrowserRouter>
      </StateProvider>
    </div>
  );
}

export default App;
