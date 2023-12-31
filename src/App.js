import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Fetch from './components/Fetch';
import Axios from './components/Axios';
import AsyncAwaitFetch from './components/AsyncAwaitFetch';
import AsyncAwaitAxios from './components/AsyncAwaitAxios';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fetch' element={<Fetch />} />
        <Route path='/axios' element={<Axios />} />
        <Route path='/async-await/fetch' element={<AsyncAwaitFetch />} />
        <Route path='/async-await/axios' element={<AsyncAwaitAxios />} />
      </Routes>
    </div>
  );
}

export default App;
