import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../Pages.css';
import { toast } from 'react-toastify';
import { createLoanRequest } from '../../redux/features/loanrequest';

const initialState = {
  ammount: "",
  loanTerm: "",
  nature: "",
  brutIncome: "",
  payBack: "",

}

function Financement() {
  const {user} = useSelector((state) => ({...state.auth}))
  const userId = user?.result?._id;

  const [formValue, setFormValue] = useState(initialState);
  const {ammount,loanTerm,nature,brutIncome,payBack} = formValue;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(ammount && loanTerm && nature && brutIncome && payBack){
      dispatch(createLoanRequest({userId,formValue, navigate, toast}))
    }
  };
  const onInputChange = (e) => {
    let {name, value} = e.target;
    setFormValue({ ...formValue, [name]: value });
  };


  return (
    <div className='Pages'>
      <form onSubmit={handleSubmit}>
        <p>nature</p>
        <select value={nature} name="nature" onChange={onInputChange} required>
          <option value={"autoinvest"}>autoinvest</option>
          <option value={"credim"}>credim</option>
          <option value={"pre salaire"}>pre salaire</option>
        </select>

        <p>Montant  DT </p>
        <input type="text" value={ammount} name="ammount" onChange={onInputChange} required ></input>

        <p>durré </p>
        <input type="text" value={loanTerm} name="loanTerm" onChange={onInputChange} required></input>

        <p>Revenu mensuel Brut: </p>
        <input type="text" value={brutIncome} name="brutIncome" onChange={onInputChange} required></input>

        <p>payBack</p>
        <select value={payBack} name="payBack" onChange={onInputChange} required>
          <option value={"every month"}>every month</option>
          <option value={"every quarter"}>every quarter</option>
          <option value={"every 6 month"}>every 6 month</option>
          <option value={"every year"}>every year</option>
        </select>

<button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Financement