// actions
import * as HttpAction from './http';

// constants
import NetworkConstants from '../constants/networking';

// store
import store from '../store';

// action types
import ActionTypes from '../action_types/channels';

// formatters
import * as ChannelsFormatters from '../formatters/channels';

export function loadChannels () {
    return new Promise((resolve, reject) => {
        HttpAction.get(`${NetworkConstants.DATA_SERVER_URL}${NetworkConstants.API.CHANNELS}`)
            .then((response) => {
                console.log(response);
                saveChannels(ChannelsFormatters.formatChannels(response));
                resolve();
            })
            .catch((error) => {
                resolve();
                console.error(error);
            });
    });
}

// dispatchers
export function saveChannels(channels) {
    store.dispatch({
        type: ActionTypes.SAVE_CHANNELS,
        payload: channels,
    });
}

export function setCurentChannelId(id) {
    store.dispatch({
        type: ActionTypes.SET_CURRENT_CHANNEL_ID,
        payload: id,
    });
}

export function setCurentChannelIndex(index) {
    store.dispatch({
        type: ActionTypes.SET_CURRENT_CHANNEL_INDEX,
        payload: index,
    });
}
