import React from 'react';
import { actions as a } from '../../dictionary';


/*****************!! WARNING !!**********************
 *                                                  *
 *        AS FEW ACTIONS AS POSSIBLE HERE           *
 *                                                  *
*****************************************************/

export const initialState = {
    player: null
};

export const reducer = (state, action) => {
    switch (action.type) {

        case a.NEW_PLAYER_REGISTERED:
            return {...state,
                player:  action.player
            };
    }
}

export const BaseContext = React.createContext();
