import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import reducer, { initialState } from './components/reducer';
//import { StateProvider } from './components/StateProvider';



  // <StateProvider initialState={initialState} reducer={reducer}>
  const element = <App/>
  // </StateProvider>
const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(element);


