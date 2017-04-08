// actions
import * as HttpActions from './http';

// constants
import NetworkConstants from '../constants/networking';

// store
import store from '../store';

// action types
import ActionTypes from '../action_types/search';

// formatters
import * as EventsFormatters from '../formatters/events';

export function updateQuery (query) {
    setQuery(query);
    saveSearchResults([]);
    setSearchStarted(false);
}

export function clear () {
    updateQuery('');
}

export function search (query) {
    return new Promise((resolve, reject) => {
        HttpActions.get(`${NetworkConstants.DATA_SERVER_URL}${NetworkConstants.API.SEARCH.replace('${query}', query)}`)
            .then((response) => {
                console.log(response);
                saveSearchResults(EventsFormatters.formatEvents(response));
                setSearchStarted(true);
                resolve();
            })
            .catch((error) => {
                resolve();
                console.error(error);
            });
    });
}

// dispatchers
export function setQuery (query) {
    store.dispatch({
        type: ActionTypes.SET_QUERY,
        payload: query,
    });
}

export function saveSearchResults (results) {
    store.dispatch({
        type: ActionTypes.SAVE_RESULTS,
        payload: results,
    });
}

export function setSearchStarted (isStarted) {
    store.dispatch({
        type: ActionTypes.SET_SEARCH_STARTED,
        payload: isStarted,
    });
}
