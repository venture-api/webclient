import React from 'react';
import { actions as a } from '../../dictionary';


/*****************!! WARNING !!**********************
 *                                                  *
 *        AS FEW ACTIONS AS POSSIBLE HERE           *
 *                                                  *
*****************************************************/

export const initialState = {
    self: null
};

export const reducer = (state, action) => {
    switch (action.type) {

        case a.NEW_PLAYER_REGISTERED:
        case a.PLAYER_LOGGED_IN:
        case a.SELF_DATA_RECEIVED:

            return {...state,
                self:  action.playerData
            };
    }
}

export const BaseContext = React.createContext();
