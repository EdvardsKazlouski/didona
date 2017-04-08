// actions
import * as HttpActions from './http';

// constants
import NetworkConstants from '../constants/networking';

// store
import store from '../store';

// action types
import ActionTypes from '../action_types/playout';

// public methods
export function updatePlayoutData () {
    return new Promise((resolve, reject) => {
        HttpActions.get(`${NetworkConstants.REMOTE_SERVER_URL}${NetworkConstants.API.PLAYOUT_STATE}`)
            .then((response) => {
                console.log(response);
                updateData(response);
                resolve();
            })
            .catch((error) => {
                resolve();
                console.error(error);
            });
    });
}

export function play (source, isRadio) {
    return new Promise((resolve, reject) => {
        HttpActions.post(`${NetworkConstants.REMOTE_SERVER_URL}${NetworkConstants.API.PLAY}`, { source, isRadio })
            .then((response) => {
                console.log(response);
                resolve();
            })
            .catch((error) => {
                resolve();
                console.error(error);
            });
    });
}

export function pause () {
    return new Promise((resolve, reject) => {
        HttpActions.post(`${NetworkConstants.REMOTE_SERVER_URL}${NetworkConstants.API.PAUSE}`)
            .then((response) => {
                console.log(response);
                resolve();
            })
            .catch((error) => {
                resolve();
                console.error(error);
            });
    });
}

// dispatchers
export function updateData (data) {
    store.dispatch({
        type: ActionTypes.UPDATE_DATA,
        payload: data,
    });
}
