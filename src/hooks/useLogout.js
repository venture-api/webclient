import { useEffect, useState, useContext } from 'react';
import { gate } from '../index';
import { useHistory } from 'react-router-dom';
import { BaseContext } from '../components/Base/reducer';
import { actions, routes as r, words as w } from '../dictionary';


export default function useLogout() {

    const history = useHistory();
    const { dispatch } = useContext(BaseContext);
    const [ isWaiting, setIsWaiting ] = useState(true);

    useEffect(() => {

        async function doLogOut() {
            console.debug('clearing user data from storage...');
            await gate.currentUser.logOut();
            dispatch({ type: actions.PLAYER_LOGGED_OUT });

            console.debug(`redirecting to ${w.login} screen`);
            history.push(r.login);
        }

        if (! isWaiting)
            doLogOut();

    }, [ isWaiting, dispatch ]);

    return setIsWaiting;
}
