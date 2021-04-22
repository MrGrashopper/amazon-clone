import React, { useState } from 'react';
import '../styles/Login.scss'; 
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');    

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/');
            })
            .catch(error => alert(error.meassage));
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // create user successful
                if (auth) {
                    history.push('/');
                }
            }) 
            .catch(error => alert(error.message))
    }
    
    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                    alt=""
                />     
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>
                <form action="">
                    <h5>E-Mail</h5>
                    <input 
                        type="text" 
                        value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input 
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button 
                        onClick={signIn} 
                        className="login__signInButton"
                        type="submit"> Sign In
                    </button>
                </form>
                <button 
                    className="login__registerButton"
                    onClick={register}
                    > Create Amazon account
                </button>
            </div>
        </div>
    )
}

export default Login
