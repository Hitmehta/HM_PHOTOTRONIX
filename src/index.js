import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Gallary from './Gallary';


import Home from './Home';
import Layout from './Layout';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Categoryr from './Category';
import Portrait from './Portrait';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
 
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/category' element={<Categoryr />}></Route>
          <Route path='/gallary' element={<Gallary />}></Route>
          <Route path='/portrait' element={<Portrait />}></Route>
          
          </Route>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);



