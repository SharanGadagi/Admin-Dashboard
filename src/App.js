import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import List from './Pages/List/List';
import SinglePage from './Pages/SinglePage/SinglePage';
import AddNew from './Pages/AddNew/AddNew';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { productInputs, userInputs } from './Components/FormSource';
import './Style/Dark.css'
import { useContext, useState } from 'react';
import { DarkModeContext } from './Context/DarkModeAction';

function App() {
 const {darkMode}=useContext(DarkModeContext)
  return (
    <div className={darkMode ? "app dark":"app"} >
      <BrowserRouter>
      <Routes>
  <Route path='/'>
    <Route index element={<Home/>} />
    <Route path='login' element={<Login />  } />
    <Route path='users'>
      <Route index element={<List/>}/>
      <Route path=':userId' element={<SinglePage/>}/>
      <Route path='new' element={<AddNew  inputs={userInputs} title="Add New User"/>}/>
    </Route>
    <Route path='products'>
      <Route index element={<List/>}/>
      <Route path=':userId' element={<SinglePage/>}/>
      <Route path='new' element={<AddNew  inputs={productInputs} title="Add New Product" />}/>
    </Route>
  </Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
