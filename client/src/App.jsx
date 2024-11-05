import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Orders from './pages/Orders'
import Profile from './pages/Profile'
import Register from './pages/Register';
import SigninPage from './pages/Signin';
import { Routes, Route } from 'react-router-dom';
import NavScroll from './components/NavScroll';
import Addbooks from './components/Addbooks';


function App() {
  return (
    <>
      <NavScroll/> 
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/signinpage' element={<SigninPage/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/orders' element={<Orders/>} />
        <Route path='/addbooks' element={<Addbooks/>} />
      </Routes>
    </>
  );
}

export default App;
