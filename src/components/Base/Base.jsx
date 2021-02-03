import React, { useReducer } from 'react';
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './base.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';
import Playground from '../Playground/Playground';
import { routes as r } from '../../dictionary';
import { BaseContext, initialState, reducer } from './reducer';


export default function Base() {

    const [ state, dispatch ] = useReducer(reducer, initialState);

    return (
        <BaseContext.Provider value={{ state, dispatch }}>
            <Router>
                <Switch>
                    <PublicRoute path={ r.login } component={ Login }/>
                    <PublicRoute path={ r.register } component={ Register }/>

                    <PrivateRoute path={ r.dashboard } component={ Playground } />
                    <Redirect to={ r.dashboard } />
                </Switch>
            </Router>
        </BaseContext.Provider>
    );
}
