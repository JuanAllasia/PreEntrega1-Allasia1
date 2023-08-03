import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Itemlistcontainer from './components/Itemlistcontainer/Itemlistcontainer';


function App() {
  return (
    <>
      <Navbar/>
      <Itemlistcontainer greeting={"hola"}/>
    </>
  );
}

export default App;
