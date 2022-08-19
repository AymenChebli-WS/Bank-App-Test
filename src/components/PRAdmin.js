import React from 'react';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';
import { useNavigate } from 'react-router-dom';


const PRAdmin = ({children}) => {
    const {user} = useSelector((state) => ({...state.auth}));
    const navigate = useNavigate();

  return user?.result?.userType == "Admin" ? children : <LoadingToRedirect />
}

export default PRAdmin