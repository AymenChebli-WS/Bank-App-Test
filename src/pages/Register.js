import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from '../redux/features/authSlice';

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const Register = () => {
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
    <div className='Pages'>
      <form onSubmit={handleSubmit}>
        First Name: <input type="text" value={firstName} name="firstName" onChange={onInputChange} required />
        <br />
        Last Name: <input type="text" value={lastName} name="lastName" onChange={onInputChange} required />
        <br />
        Email: <input type="email" value={email} name="email" onChange={onInputChange} required />
        <br />
        Password: <input type="password" value={password} name="password" onChange={onInputChange} required />
        <br />
        Confirm Password: <input type="password" value={confirmPassword} name="confirmPassword" onChange={onInputChange} required />
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  )
}

export default Register