// actions
import * as HttpAction from './http';

// constants
import NetworkConstants from '../constants/networking';

// store
import store from '../store';

// action types
import ActionTypes from '../action_types/events';

// formatters
import * as EventsFormatters from '../formatters/events';

export function loadEventsByChannelId (channelId) {
    return new Promise((resolve, reject) => {
        HttpAction.get(`${NetworkConstants.DATA_SERVER_URL}${NetworkConstants.API.EVENTS.replace('${id}', channelId)}`)
            .then((events) => {
                console.log(events);
                saveEvents(EventsFormatters.formatEvents(events));
                resolve();
            })
            .catch((error) => {
                reject();
                console.error(error);
            });
    });
}

// dispatchers
export function saveEvents(events) {
    store.dispatch({
        type: ActionTypes.SAVE_EVENTS,
        payload: events,
    });
}
