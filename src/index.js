import * as Realm from 'realm-web';
import React from 'react';
import ReactDOM from 'react-dom';
import Base from './components/Base/Base';
import reportWebVitals from './reportWebVitals';


const gate = new Realm.App({ id: 'gate-qhorm' });
export { gate };

ReactDOM.render(
    <React.StrictMode>

        <Base />

    </React.StrictMode>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
