import React, { useContext, useEffect, useState } from 'react';
import Login from './login.jsx'
import { AppContext } from '../App.jsx';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase.js'
import Signup from './signup.jsx';


const Nav = () => {

    const { user, setUser } = useContext(AppContext);

    const [hideSignup, setHideSignup] = useState(true);
    const [hideLogin, setHideLogin] = useState(trueg);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
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
                    <button className="login" onClick={logOut} >Signed in {user.email[0]}</button>
                ) : (
                    <button className="login" onClick={signupScreen} >Login</button>
                )}
            </nav>
            <Signup hideSignup={hideSignup} setHideSignUp={setHideSignup} signupScreen={signupScreen} loginScreen={loginScreen} />
            <Login hideLogin={hideLogin} setHideLogin={setHideLogin} loginScreen={loginScreen} />

        </>

    );
}

export default Nav;
