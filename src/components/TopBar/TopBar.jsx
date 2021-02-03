import React, { useContext, useEffect } from 'react';
import './topbar.css';
import { actions } from '../../dictionary';
import { gate } from '../../index';
import { BaseContext } from '../Base/reducer';
import useGetProjection from '../../hooks/useGetProjection';


const formatter = new Intl.NumberFormat('en-EN', {
    style: 'decimal'
});

export default function TopBar() {

    const { dispatch, state: { self }} = useContext(BaseContext);

    // if we have no `self` object, get our projection from DB
    const selfProjection = useGetProjection({
        trigger: ! self,
        collection: 'player',
        query: { id: gate.currentUser.customData.id }})

    useEffect(() => {

        if (selfProjection) {
            // and update the context state with it
            dispatch({ type: actions.SELF_DATA_RECEIVED, playerData: selfProjection });
        }

    }, [ selfProjection ]);

    return (<div id="top-bar">

        <div id="resources">stats</div>

        <div id="balance">{ self ? formatter.format(self.balance) : 'loading...' }</div>

        <div id="player-menu" onClick={ () => gate.currentUser.logOut() }>log out</div>

    </div>);
}
