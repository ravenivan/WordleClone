import React, { useContext, useEffect, useState } from 'react';
import Login from './login.jsx'
import { AppContext } from '../App.jsx';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase.js'
import Signup from './signup.jsx';


const Nav = () => {

    const { user, setUser } = useContext(AppContext);

    const [hideSignup, setHideSignup] = useState(true);
    const [hideSignin, setHideSignin] = useState(true);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user)
                setUser(user);
            } else {
                setUser(null);
            }
        });


    }, []);

    function hideScreen() {
        const change = !hideSignup;
        setHideSignup(change);
    }

    function logOut() {
        signOut(auth);
        setUser(null);
    }

    return (
        <>
            <nav>
                <h1>Wordle</h1>
                {user ? (
                    <button className="login" onClick={logOut} >Signed in {user.email[0]}</button>
                ) : (
                    <button className="login" onClick={hideScreen} >Login</button>
                )}
            </nav>
            <Login hideSignup={hideSignup} setHideSignUp={setHideSignup} hideScreen={hideScreen} />

        </>

    );
}

export default Nav;
