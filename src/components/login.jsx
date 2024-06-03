import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../App";

const Login = ( {hideLogin, setHideLogin, loginScreen }) => {

	const { user, setUser } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const signIn = (e) => {
  //   e.preventDefault();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((response) => {
  //       setUser(user)
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // };

	function login() {
		signInWithEmailAndPassword(auth, email, password)
			.then((response) => {
				setUser(response.user);
				alert("Sign in successful!")
			})
			.catch((error) => alert(error));
	}

  return (
    <div className={`login-screen ${hideLogin && "hide"}`}>
      <button className="login-exit" onClick={loginScreen} >
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

      <button className="login-btn" onClick={login}>Log in</button>
    </div>
  );

}

export default Login;

