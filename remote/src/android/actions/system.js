// store
import store from '../store';

// action types
import ActionTypes from '../action_types/system';

export function showEvents () {
    toggleEvents(true);
}

export function hideEvents () {
    toggleEvents(false);
}

// dispatchers
export function toggleEvents (toggle) {
    store.dispatch({
        type: ActionTypes.SET_SHOW_EVENTS,
        payload: toggle,
    });
}
