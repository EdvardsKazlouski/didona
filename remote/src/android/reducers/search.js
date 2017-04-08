import Immutable from 'immutable';

// action types
import ActionTypes from '../action_types/search';

const initialState = Immutable.fromJS({
    query: '',
    results: Immutable.List(),
    searchStarted: false,
});

export default function searchReducer (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SAVE_RESULTS:
            return state.set('results', Immutable.fromJS(action.payload));

        case ActionTypes.SET_QUERY:
            return state.set('query', action.payload);

        case ActionTypes.SET_SEARCH_STARTED:
            return state.set('searchStarted', action.payload);

        default:
            return state;
    }
}
