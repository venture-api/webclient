import React from 'react';
import TopBar from '../TopBar/TopBar';
import './playground.css';
import SidePanel from '../SidePanel/SidePanel';
import BottomBar from '../BottomBar/BottomBar';
import Main from '../Main/Main';


export default function Playground() {

    return <div id="playground">

        <TopBar />

        <SidePanel />

        <Main />

        <BottomBar />

    </div>;
}
