import Immutable from 'immutable';

// action types
import ActionTypes from '../action_types/playout';

const initialState = Immutable.fromJS({
    source: '',
    startTime: null,
});

export default function playoutReducer (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.UPDATE_DATA:
            return Immutable.fromJS(action.payload);

        case ActionTypes.SET_SOURCE:
            return state.set('source', action.payload);

        case ActionTypes.SET_START_TIME:
            return state.set('startTime', action.payload);

        default:
            return state;
    }
}
