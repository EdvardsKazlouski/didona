import Immutable from 'immutable';

// action types
import ActionTypes from '../action_types/system';

const initialState = Immutable.fromJS({
    showEvents: true
});

export default function systemReducer (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_SHOW_EVENTS:
            return state.set('showEvents', action.payload);

        default:
            return state;
    }
}
