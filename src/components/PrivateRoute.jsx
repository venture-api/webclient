import React from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';
import { routes } from '../dictionary';
import { gate } from '../index';


export default function PrivateRoute({ component: Component, ...rest }) {

    const { pathname } = useLocation();

    return (
        <Route { ...rest } render={(props) => {

            if (gate.currentUser) {
                return <Component {...rest} {...props} />
            } else {
                // we do not have token stored (logged out)
                return props.location.pathname !== routes.login
                    ? <Redirect to={ `${routes.login}${pathname ? '?redirectTo='+pathname : ''}` } />
                    : null
            }
        }}/>
    )
};
