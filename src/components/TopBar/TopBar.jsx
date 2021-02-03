import React, { useContext } from 'react';
import './topbar.css';
import { gate } from '../../index';
import { BaseContext } from '../Base/reducer';


export default function TopBar() {

    const { state:  { self }} = useContext(BaseContext);

    console.log({ self })

    return (<div id="top-bar">

        <div id="resources">stats</div>

        <div id="balance">{ self.balance }</div>

        <div id="player-menu" onClick={ () => gate.currentUser.logOut() }>log out</div>

    </div>);
}
