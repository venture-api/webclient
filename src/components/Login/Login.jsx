import * as Realm from 'realm-web';
import React, { useState } from 'react';
import { words as w } from '../../dictionary';
import './login.css';
import { gate } from '../../index';


export default function Login() {

    const [ user, setUser ] = useState();

    console.log({ user })

    async function handleSubmit(e) {

        e.preventDefault();
        const user = await gate.logIn(Realm.Credentials.anonymous());
        setUser(user);
    }

    return (
        <div className="center">

            <form id="login" onSubmit={ handleSubmit }>
                <h1>Login</h1>

                <label htmlFor={ w.email }>{ w.email }</label>
                <input id={ w.email } type="text"/>

                <label htmlFor={ w.password }>{ w.password }</label>
                <input id={ w.password } type="password"/>

                <button className="primary" type="submit">{ w.submit }</button>
            </form>

        </div>
    );
}
