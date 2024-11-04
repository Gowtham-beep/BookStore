import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/orders' element={<Orders/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </>
  );
}

export default App;
