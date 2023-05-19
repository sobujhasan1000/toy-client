import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContest=createContext();
const auth=getAuth(app);

const AuthProvider = ({children}) => {

    const authInfo={

    }
    return (
        <AuthContest.Provider value={authInfo}>
            {children}
        </AuthContest.Provider>
    );
};

export default AuthProvider;