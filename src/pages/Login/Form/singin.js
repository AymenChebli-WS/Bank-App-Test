import React, {useState, useEffect} from 'react';
import {TextField,Button } from "@material-ui/core";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../../../redux/features/authSlice';
import 'react-toastify/dist/ReactToastify.css'


import useStyles from './styleform';

const initialState = {
  email: "",
  password: "",
}


function Singin() {
  const classes = useStyles();

  const [formValue, setFormValue] = useState(initialState);
  const {loading, error} = useSelector((state) => ({...state.auth}));
  const {email, password} = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();



  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email && password){
      dispatch(login({formValue, navigate, toast}))
    }
  };
  const onInputChange = (e) => {
    let {name, value} = e.target;
    setFormValue({ ...formValue, [name]: value });
  };


  return (
    
        
        <form autoComplete='off' onSubmit={handleSubmit}  className={classes.customFormContainer}>
            
            <TextField type="email" value={email} name='email' variant='standard' placeholder='Email' margin="normal" fullWidth onChange={onInputChange} /> 
           
            <TextField  name='password' value={password} variant='standard' placeholder='Password' margin="normal" type="password" fullWidth onChange={onInputChange}/>
            <br/>
            
            <Button type="submit" variant="contained" size="large" className={classes.formButtons}>Login</Button>
            <Button color="primary" size="large" className={classes.forgetButton}>Mot de passe oublié?</Button>
        </form>
        
  )
}

export default Singin