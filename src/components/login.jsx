import React, { useContext, useState } from 'react';
import { auth } from '../../firebase.js'
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from 'firebase/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../App.jsx';

const login = ( {hideSignup, setHideSignUp, hideScreen} ) => {

    const { user, setUser} = useContext(AppContext);

    const [email, setEmail] = useState("a");
    const [password, setPassword] = useState("a");

    function signUp() {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => alert(`You created a new account ${user} `))
            .catch((error) => alert(error));
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
                    <input 
                        type="text" 
                        id="email" 
                        placeholder="Enter email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                </div>
                <div className="login-password">
                    <h3 className='login-text'>Password</h3>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
            </form>
            <button>Already have an account? Sign in!</button>
            <button className="signup" onClick={signUp}>Sign up</button>
        </div>
    );
}

export default login;
