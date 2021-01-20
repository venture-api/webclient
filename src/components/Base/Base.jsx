import React, { useReducer } from 'react';
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './base.css';
import Login from '../Login/Login';
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';
import Dashboard from '../Dashboard';
import { routes as r } from '../../dictionary';
import { GlobalContext, initialState, reducer } from './reducer';


export default function Base() {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <GlobalContext.Provider value={{ state, dispatch }}>
            <Router>
                <Switch>
                    <PublicRoute path={ r.login } component={ Login }/>

                    <PrivateRoute path={ r.dashboard } component={ Dashboard } />
                    <Redirect to={ r.dashboard } />
                </Switch>
            </Router>
        </GlobalContext.Provider>
    );
}
