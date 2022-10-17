import { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail} from 'firebase/auth';
import { auth } from "../firebase";

export const authContext = createContext()

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('there is not auth provider')
    return context
}


export function AuthProvider({children}) {

    const [user, setUsers] = useState(null);
    const [loading, setLoading] = useState(true);
    const signup = (email,password) => 
        createUserWithEmailAndPassword(auth, email, password)

    const login = async (email,password) => 
        signInWithEmailAndPassword(auth, email, password);

    const logout = () => signOut(auth);

    const resetPassword = (email) => sendPasswordResetEmail(auth, email)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUsers(currentUser);
            setLoading(false);
        });

        return () => unsubscribe();
    }, [])

    return (
        <authContext.Provider value={{signup, login, user, logout, loading, resetPassword}}>
            {children}
        </authContext.Provider>
    )
}