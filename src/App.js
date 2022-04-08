import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/Navbar';
import Comptes from './pages/Comptes';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {useDispatch} from 'react-redux';
import {setUser} from "./redux/features/authSlice";
import AddEditCompte from './pages/AddEditCompte';
import SingleCompte from './pages/SingleCompte';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
    useEffect(() => {
      dispatch(setUser(user));
    }, []);
  return (
    <div className="Container">
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/comptes' element={<Comptes/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/addCompte' element={<AddEditCompte />} />
          <Route path='/editCompte/:id' element={<AddEditCompte />} />
          <Route path='/compte/:id' element={<SingleCompte />} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
