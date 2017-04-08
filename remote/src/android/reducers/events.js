import Immutable from 'immutable';

// action types
import ActionTypes from '../action_types/events';

const initialState = Immutable.fromJS({
    eventsList: []
});

export default function eventsReducer (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SAVE_EVENTS:
            return state.set('eventsList', Immutable.fromJS(action.payload));

        default:
            return state;
    }
}
