import React, { useState } from 'react';
import Login from './login.jsx'


const Nav = () => {

    const [hideSignup, setHideSignup] = useState(false);

    function hideScreen() {
        setHide(!hide);
    }

    return (
        <>
            <nav>
                <h1>Wordle</h1>
                <button className="login" onClick={hideScreen} >Login</button>
            </nav>
            <Login hideSignup={hideSignup} setHideSignUp={setHideSignup} hideScreen={hideScreen} />
        </>
        
    );
}

export default Nav;
