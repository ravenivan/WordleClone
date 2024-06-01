import React, { useState } from 'react';
import { auth } from '../firebase.js'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const login = ( {hideSignup, setHideSignUp, hideScreen} ) => {


    function signUp() {
        createUserWithEmailAndPassword(auth, "ivanl121@nycstudents.net", "ivan123")
            .then((user) => console.log(user))
            .catch((error) => console.log(error));
    }

    function logIn() {
        signInWithEmailAndPassword(auth, "ivanl121@nycstudents.net", "ivan123")
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    }

    return (
        <div className={`login-screen ${hideSignup && "hide"}`}>
            <button className="login-exit" onClick={hideScreen} >
                <FontAwesomeIcon icon={faX}/>
            </button>
            <h1 className='login-title'>Sign up to track your stats</h1>
            <form action="" className="login-form">
                <div className="login-email">
                    <h3 className='login-text'>Email</h3>
                    <input type="text" placeholder="Enter email" />
                </div>
                <div className="login-password">
                    <h3 className='login-text'>Password</h3>
                    <input type="text" placeholder='Password' />
                </div>

            </form>
            <button className="signup" onClick={signUp}>Sign up</button>
        </div>
    );
}

export default login;
