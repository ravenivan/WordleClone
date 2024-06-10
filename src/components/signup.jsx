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
import toast from 'react-hot-toast';

const Signup = ({ hideSignup, signupScreen, loginScreen }) => {

  const { user, setUser } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signUp() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((newUser) => {
        setEmail("");
        setPassword("");
        signupScreen();
        toast.success(`You created a new account ${newUser.user.email} `)
      })
      .catch((error) => toast.error("Email already in use or invalid"));
  }

  return (
    <div className={`signup-screen ${hideSignup && "hide"}`}>
      <button className="signup-exit" onClick={signupScreen} >
        <FontAwesomeIcon icon={faX} />
      </button>
      <h1 className='signup-title'>Sign up to track your stats</h1>
      <form action="" className="signup-form">
        <div className="signup-email">
          <h3 className='signup-text'>Email</h3>
          <input
            type="text"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="signup-password">
          <h3 className='signup-text'>Password</h3>
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
      <div className="signup-login">
        <h4>Have an account already?</h4>
        <button className='signup-login-btn' onClick={() => {
        signupScreen();
        loginScreen();
        }} >
        Sign in!
        </button>
      </div>
      <button className="signup-btn" onClick={signUp}>Sign up</button>
    </div>
  );
}

export default Signup;