import React, { useReducer, useEffect } from 'react';
import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import './base.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PublicRoute from '../PublicRoute';
import PrivateRoute from '../PrivateRoute';
import Dashboard from '../Playground/Dashboard';
import { actions as a, routes as r, words as w } from '../../dictionary';
import { BaseContext, initialState, reducer } from './reducer';
import { gate } from '../../index';


export default function Base() {

    const [ state, dispatch ] = useReducer(reducer, initialState);
    const { self } = state;

    // load player data if player is logged in
    useEffect(() => {

        async function loadPlayerdata() {
            const mongodb = gate.currentUser.mongoClient('mongodb-atlas');

            console.debug(`fetching projection data for ${w.player}`, gate.currentUser.customData.id);
            const playerDataProjection = await mongodb.db('projection').collection('player').findOne(
                { id: gate.currentUser.customData.id },
                { projection: { _id: false } });

            console.debug(`merging fetched ${w.player} data`);
            dispatch({ type: a.SELF_DATA_RECEIVED, playerData: {
                    ...gate.currentUser.customData,
                    ...gate.currentUser._profile.data,
                    ...playerDataProjection }});
        }

        if (gate.currentUser && ! self)
            loadPlayerdata();

    }, [ self ]);

    return (
        <BaseContext.Provider value={{ state, dispatch }}>
            <Router>
                <Switch>
                    <PublicRoute path={ r.login } component={ Login }/>
                    <PublicRoute path={ r.register } component={ Register }/>

                    <PrivateRoute path={ r.dashboard } component={ Dashboard } />
                    <Redirect to={ r.dashboard } />
                </Switch>
            </Router>
        </BaseContext.Provider>
    );
}
