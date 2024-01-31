import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Stocks from './components/stocks';


function App() {
  return (
   <>
    <Navbar/>
      <div>
    <Routes>        
      <Route path="/"  element={<Stocks/>} />
      <Route path="/stocks"  element={<Stocks />}/>
    </Routes>
    </div>
    </>
   
  );
}

export default App;
