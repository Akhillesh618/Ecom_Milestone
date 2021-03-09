
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'

export default function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignIN = e => {
        e.preventDefault();
        //console.log(email,password);

        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('./')
        })
            .catch(error => alert(error.message))
    }

    const Createaccount = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
            //new user with email & password saved in FB

            if (auth) {
                history.push('./')
            }
        })
            .catch(error => alert(error.message))

    }

    return (
        <div className='login'>

            <Link to='./'>
                <img className='login_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png" alt="" />
            </Link>

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button onClick={SignIN} className="signInBtn">Sign In</button>
                    <button onClick={Createaccount} className="createAccBtn">Create Your Account</button>
                </form>

            </div>

        </div>
    )
}
