import * as Realm from 'realm-web';
import React, { useState } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { words as w, phrases as p, routes as r } from '../../dictionary';
import './login.css';
import { gate } from '../../index';


export default function Login() {

    const [ user, setUser ] = useState();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    console.log({ user })

    async function handleSubmit(e) {

        e.preventDefault();
        const credentials = Realm.Credentials.emailPassword(email, password);
        const user = await gate.logIn(credentials);
        const customUserData = await user.refreshCustomData()
        console.log(customUserData);
        setUser(customUserData);
    }

    return (
        <div className="center">

            <form id="login" onSubmit={ handleSubmit }>
                <h1>Login</h1>

                <label htmlFor={ w.email }>{ w.email }</label>
                <input id={ w.email } type="text" value={ email }
                       onChange={ (e) => setEmail(e.target.value) }/>

                <label htmlFor={ w.password }>{ w.password }</label>
                <input id={ w.password } type="password" value={ password }
                       onChange={ (e) => setPassword(e.target.value) }/>

                <button className="primary" type="submit">{ w.submit }</button>
                <Link to={ generatePath(r.newPlayer) }>{ p.newPlayer }</Link>

            </form>

        </div>
    );
}
