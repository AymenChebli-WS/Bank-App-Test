import React from 'react';
import { useSelector } from 'react-redux';
import LoadingToRedirect from './LoadingToRedirect';

const Onlylogedin = ({children}) => {
    const {user} = useSelector((state) => ({...state.auth}));
  return user ? children : null
}

export default Onlylogedin;