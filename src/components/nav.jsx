import React, { useContext, useEffect, useState } from 'react';
import Login from './login.jsx'
import { AppContext } from '../App.jsx';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase.js'
import Signup from './signup.jsx';


const Nav = () => {

    const { user, setUser, hideSignup, setHideSignup, hideLogin, setHideLogin } = useContext(AppContext);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
    }, []);

    function signupScreen() {
        const change = !hideSignup;
        setHideSignup(change);
    }

    function loginScreen() {
        const change = !hideLogin;
        setHideLogin(change);
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
                    <button className="logged-in" onClick={logOut} >{user.email[0].toUpperCase()}</button>
                ) : (
                    <button className="login" onClick={signupScreen} >Login</button>
                )}
            </nav>
            <Signup hideSignup={hideSignup} signupScreen={signupScreen} loginScreen={loginScreen} />
            <Login hideLogin={hideLogin} loginScreen={loginScreen} />

        </>

    );
}

export default Nav;
