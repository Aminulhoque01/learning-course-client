import React, { createContext, useEffect, useState } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext= createContext();
const auth= getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const[loading, setLoading]=useState(true);

    const createUser=(email,password,)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const emailLogin=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    
    const googleLogin=(provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);

    }

    const githubLogin=(githubProvider)=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }

    const updateUserProfile= (profile)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, profile);
    }

    const logout=()=>{
        setLoading(true);
        return signOut(auth)
    }


    useEffect( ()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser);
            setLoading(false);
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
        loading,
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