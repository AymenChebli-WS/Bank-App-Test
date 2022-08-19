import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
    const {user} = useSelector((state) => ({...state.auth}));


  return (
    <div className='Pages'>
        Name: {user?.result?.name} <br />
    </div>
  )
}

export default Profile