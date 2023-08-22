import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"




function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
        <Route path='*' element={<h1>404 not found </h1>}/>
      </routes>
      </BrowserRouter>
      <ItemListContainer/>
    </>
  );
}

export default App;
