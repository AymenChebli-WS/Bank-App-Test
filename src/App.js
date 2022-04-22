import './App.css';
import  React ,{ useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from './components/Navbar';
import Comptes from './pages/Comptes';
import Home from './pages/Home';
import Login from './pages/Login/loginpage';
import Register from './pages/Register';
import {useDispatch} from 'react-redux';
import {setUser} from "./redux/features/authSlice";
import AddEditCompte from './pages/AddEditCompte';
import SingleCompte from './pages/SingleCompte';
import Dashboard from './pages/Dashboard';
import Landingpage from './pages/Landingpage';
import PrivateRoute from './components/PrivateRoute';
import Onlylogedin from './components/Onlylogedin';
import Transfer from './pages/Transfer/Transfer';
import { Container } from 'react-bootstrap';


function App() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
    useEffect(() => {
      dispatch(setUser(user));
    }, []);


  var test = localStorage.getItem('profile')


  return (
    <div className="Container">
      <Router>
      
      <ToastContainer />
      <Onlylogedin> <Navbar/> </Onlylogedin>
        <Routes>
         <Route path='/' exact element={ <Landingpage/>} />
          <Route path='/login' element={<Login />} />         
          <Route path='/Home' exact element={ <PrivateRoute><Home/></PrivateRoute>} />
          <Route path='/comptes' element={ <PrivateRoute> <Comptes/> </PrivateRoute> } />
          <Route path='/transfer' element={ <PrivateRoute> <Transfer/> </PrivateRoute> } />
          <Route path='/register' element={ <PrivateRoute> <Register /> </PrivateRoute>} />
          <Route path='/addCompte' element={ <PrivateRoute> <AddEditCompte /> </PrivateRoute>} />
          <Route path='/editCompte/:id' element={ <PrivateRoute><AddEditCompte /> </PrivateRoute> } />
          <Route path='/compte/:id' element={ <PrivateRoute> <SingleCompte /> </PrivateRoute>} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
         
         
        </Routes>
      </Router>
      
    </div>
  );
}





export default App;
