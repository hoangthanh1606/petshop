import './App.css';
import Home from './Pages/Home/Home';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
// import ListAnimal from './Pages/Animals';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          {/* <Route path='animals' element={<ListAnimal/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
