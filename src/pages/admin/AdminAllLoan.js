
import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLoan } from '../../redux/features/loanSlice';
function AdminAllLoan() {
    const dispatch = useDispatch();
    const {loans} = useSelector((state) => ({...state.loan}));

    useEffect(() => {
        dispatch(getAllLoan());
    }, []);


  return (
    <div className='Pages'>
        {loans && loans.map((item, index) => (

                          <div key={index}>user: {item.User}</div>
                         
                      )
                     )}   
    </div>
  )
}

export default AdminAllLoan