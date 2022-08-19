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
import Financement from './pages/Financement/Financement';
import Historique from './pages/Historique/Historique';
import { Container } from 'react-bootstrap';
import StatutTransfer from './pages/Financement/StatutTransfer';
import PRAdmin from './components/PRAdmin';
import SingleUser from './pages/SingleUser';
import Profile from './pages/Profile';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminTransfer from './pages/admin/AdminTransfer';
import AdminLoanrequest from './pages/admin/AdminLoanrequest';
import AdminAllLoan from './pages/admin/AdminAllLoan';

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
      <Onlylogedin> <Navbar/> </Onlylogedin>
        <Routes>
         <Route path='/' exact element={ <Landingpage/>} />
          <Route path='/login' element={<Login />} />       
          <Route path='/Home' exact element={ <PrivateRoute><Home/></PrivateRoute>} />
          <Route path='/comptes' element={ <PrivateRoute> <Comptes/> </PrivateRoute> } />
          <Route path='/transfer' element={ <PrivateRoute> <Transfer/> </PrivateRoute> } />
          <Route path='/Statutloan' element={ <PrivateRoute> <StatutTransfer/> </PrivateRoute> } />
          <Route path='/historique' exact element={ <PrivateRoute><Historique/></PrivateRoute>} />
          <Route path='/financement' element={ <PrivateRoute> <Financement /> </PrivateRoute>} />
          <Route path='/register' element={ <PrivateRoute> <Register /> </PrivateRoute>} />
          <Route path='/addCompte' element={ <PrivateRoute> <AddEditCompte /> </PrivateRoute>} />
          <Route path='/editCompte/:id' element={ <PrivateRoute><AddEditCompte /> </PrivateRoute> } />
          <Route path='/compte/:id' element={ <PrivateRoute> <SingleCompte /> </PrivateRoute>} />
          <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path='/user/:id' element={<PRAdmin><SingleUser /></PRAdmin>} />
          <Route path='/profile' element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path='/admin' element={<PRAdmin><AdminDashboard /></PRAdmin>} />
          <Route path='/admintransfer' element={<PRAdmin><AdminTransfer /></PRAdmin>} />
          <Route path='/adminloanreq' element={<PRAdmin><AdminLoanrequest /></PRAdmin>} />
          <Route path='/adminallloan' element={<PRAdmin><AdminAllLoan /></PRAdmin>} />
         
         
        </Routes>
      </Router>
      
    </div>
  );
}





export default App;
