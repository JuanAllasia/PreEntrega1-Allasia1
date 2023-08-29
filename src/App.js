import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"




function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/Category/:CategoryId' element={<ItemListContainer/>}/>
        <Route path='/Item/:ItemId' element={<ItemListContainer/>}/>
        <Route path='*' element={<h1>404 not found </h1>}/>
      </Routes>
      </BrowserRouter>
      <ItemListContainer/>
    </>
  );
}

export default App;
