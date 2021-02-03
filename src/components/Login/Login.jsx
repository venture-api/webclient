import qs from 'qs';
import * as Realm from 'realm-web';
import React, { useState, useContext } from 'react';
import { Link, generatePath, useHistory, useLocation } from 'react-router-dom';
import { words as w, routes as r, actions } from '../../dictionary';
import './login.css';
import { gate } from '../../index';
import { BaseContext } from '../Base/reducer';


export default function Login() {

    const { dispatch } = useContext(BaseContext);
    const history = useHistory();
    const location = useLocation();
    const { redirectTo } = qs.parse(location.search, { ignoreQueryPrefix: true });
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const credentials = Realm.Credentials.emailPassword(email, password);
        const account = await gate.logIn(credentials);
        const customUserData = await account.refreshCustomData();
        const mongodb = gate.currentUser.mongoClient('mongodb-atlas');
        const projection = await mongodb.db('projection').collection('player').findOne({ id: customUserData.id });
        dispatch({ type: actions.PLAYER_LOGGED_IN, playerData: { ...customUserData, ...projection }});
        history.push(redirectTo || r.dashboard);
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
                <Link to={ generatePath(r.register) }>{ w.register }</Link>

            </form>
        </div>
    );
}
