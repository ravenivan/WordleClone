import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useContext, useState } from "react";
import { auth } from "../../firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../App";
import toast from "react-hot-toast";

const Login = ( {hideLogin, loginScreen }) => {

	const { user, setUser } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

	function login() {
		signInWithEmailAndPassword(auth, email, password)
			.then((response) => {
				setUser(response.user); // maybe can be removed, need test
        setEmail("");
        setPassword("");
        loginScreen();
				toast.success("Sign in successful!");
			})
			.catch((error) => toast.error("Invalid details!"));
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

