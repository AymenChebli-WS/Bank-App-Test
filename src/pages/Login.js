import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { login } from '../redux/features/authSlice';

const initialState = {
    email: "",
    password: "",
}

const Login = () => {
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
    <div className='Pages'>
      <form onSubmit={handleSubmit}>
        Email: <input type="email" value={email} name="email" onChange={onInputChange} required />
        <br /> Password: <input type="password" value={password} name="password" onChange={onInputChange} required />
        <br /><input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login