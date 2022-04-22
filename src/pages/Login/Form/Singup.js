import React, {useState, useEffect} from 'react';
import { TextField, Button } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register } from '../../../redux/features/authSlice';
import 'react-toastify/dist/ReactToastify.css'


import useStyles from './styleform';

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

function Singup() {

  const classes = useStyles();

    const [formValue, setFormValue] = useState(initialState);
    const {loading, error} = useSelector((state) => ({...state.auth}));
    const {email, password, firstName, lastName, confirmPassword} = formValue;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      error && toast.error(error);
    }, [error]);

    const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
        return toast.error("Password does not match.")
      }
      if(email && password && firstName && lastName && confirmPassword){
        dispatch(register({formValue, navigate, toast}))
      }
    };
    const onInputChange = (e) => {
      let {name, value} = e.target;
      setFormValue({ ...formValue, [name]: value });
    };

  return (
    <form autoComplete='off' onSubmit={handleSubmit} className={classes.customFormContainer}>

      <TextField name='email' variant='standard' placeholder='Email' margin="normal" fullWidth
        value={email}
        onChange={onInputChange}
      />
      <TextField name='password' type="password" variant='standard' placeholder='Password' margin="normal"  fullWidth
      value={password}
      onChange={onInputChange}
      />
      <TextField name='confirmPassword' type="password" variant='standard' placeholder='Confirm password' margin="normal" fullWidth
      value={confirmPassword}
      onChange={onInputChange}
       />
      <TextField name='firstName' variant='standard' placeholder='name' margin="normal" fullWidth 
      value={firstName}
      onChange={onInputChange}
      />
      <TextField name='lastName' variant='standard' placeholder='Last name' margin="normal" fullWidth
      value={lastName}
      onChange={onInputChange}
       />
      <br />

      <Button type="submit" variant="contained" size="large" className={classes.formButtons}>Sing up</Button>

    </form>
  )
}

export default Singup