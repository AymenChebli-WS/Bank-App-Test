import React, {useEffect} from 'react';
import { getTransfers } from '../../redux/features/transfer';
import { useDispatch, useSelector } from 'react-redux';

function AdminTransfer() {
 
    const dispatch = useDispatch();
    const {transfers} = useSelector((state) => ({...state.transfer}));

    useEffect(() => {
        dispatch(getTransfers());
    }, []);


  return (
    <div className='Pages'>
        {transfers && transfers.map((item, index) => (
                          <div>Sender account: {item.sender}</div>
                      ))}   
    </div>
  )
}

export default AdminTransfer