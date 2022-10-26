import React, { createContext, useEffect, useState } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext= createContext();
const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser=(email,password,)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const emailLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    
    const googleLogin=(provider)=>{

        return signInWithPopup(auth, provider);

    }

    const githubLogin=(githubProvider)=>{
        return signInWithPopup(auth, githubProvider)
    }

    const updateUserProfile= (profile)=>{
        return updateProfile(auth.currentUser, profile);
    }

    const logout=()=>{
        return signOut(auth)
    }


    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[]);

    const authInfo={
        user,
        createUser,
        googleLogin,
        githubLogin,
        updateUserProfile,
        emailLogin,
        logout,
        
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>  
        </div>
    );
};

export default AuthProvider;