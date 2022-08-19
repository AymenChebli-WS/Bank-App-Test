import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/features/authSlice';

const AdminDashboard = () => {
    const dispatch = useDispatch();
    const {users} = useSelector((state) => ({...state.auth}));

    useEffect(() => {
        dispatch(getUsers());
    }, []);


  return (
    <div className='Pages'>
        {users && users.map((item, index) => (
                          <div>User Email: {item.email}</div>
                      ))}   
    </div>
  )
}

export default AdminDashboard