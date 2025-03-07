import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import usePublicAxios from "../Hooks/usePublicAxios";


export const AuthContext = createContext(null)
const auth = getAuth(app)



const AuthProvider = ({ children }) => {
    const axiosPublic = usePublicAxios();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                localStorage.removeItem('token');
                setLoading(false);
            }


        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        updateUserProfile,
        googleSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;