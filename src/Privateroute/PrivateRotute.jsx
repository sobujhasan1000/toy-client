import React, { useContext } from 'react';
import { AuthContest } from './../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRotute = ({children}) => {
    const {user,loading}=useContext(AuthContest);
    const location=useLocation();

    if(loading){
        return <progress className="progress w-62"></progress>
    }
    if(user){
        return children;
    }

    return <Navigate state={{from:location}} to='/loging' replace={true}></Navigate>
};

export default PrivateRotute;