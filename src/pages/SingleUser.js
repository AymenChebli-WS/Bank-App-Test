import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser } from '../redux/features/authSlice';
import { getLoanrequestByuser } from '../redux/features/loanrequest';
import { getTransferByuser } from '../redux/features/transfer';

const SingleUser = () => {
  const dispatch = useDispatch();
  const {singleUser} = useSelector((state) => ({...state.auth}));
  const {userLoanReqs} = useSelector((state) => ({...state.loan}));
  const {userTransfers} = useSelector((state) => ({...state.transfer}))
  const {id} = useParams();

  useEffect(() => {
    if(id) {
        dispatch(getUser(id));
        dispatch(getTransferByuser(id))
        dispatch(getLoanrequestByuser(id))
    }
}, [id])

  return (
    <div className='Pages'>
        User Email: {singleUser?.email} <br />
        {userTransfers && userTransfers.map((item, index) => (
                          <div>Receiver: {item.reciver}</div>
                      ))}
        {userLoanReqs && userLoanReqs.map((item, index) => (
                          <div>Loan Nature: {item.nature}</div>
                      ))}              
    </div>
  )
}

export default SingleUser