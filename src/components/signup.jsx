import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={`login-screen ${hideSignup && "hide"}`}>
      <button className="login-exit" onClick={hideScreen} >
        <FontAwesomeIcon icon={faX} />
      </button>
      <h1 className='login-title'>Log into your account</h1>
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

export default Signup;
