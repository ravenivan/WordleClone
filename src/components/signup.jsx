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

const Signup = ({ hideSignup, setHideSignUp, signupScreen, loginScreen }) => {

  const { user, setUser } = useContext(AppContext);

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
      <button onClick={() => {
        signupScreen();
        loginScreen();
      }} >
        Already have an account? Sign in!
      </button>
      <button className="signup-btn" onClick={signUp}>Sign up</button>
    </div>
  );
}

export default Signup;