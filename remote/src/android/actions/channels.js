// actions
import * as HttpActions from './http';
import * as SystemActions from './system';
import * as EventsActions from './events';

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
        HttpActions.get(`${NetworkConstants.DATA_SERVER_URL}${NetworkConstants.API.CHANNELS}`)
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

export function updateCurrentChannel (index) {
    const state = store.getState();
    const channels = state.channels.get('channelsList');
    const currentChannel = channels.get(index);
    const currentChannelId = currentChannel.get('id');

    setCurentChannelId(currentChannelId);
    setCurentChannelIndex(index);
    EventsActions.loadEventsByChannelId(currentChannelId).then(SystemActions.showEvents);
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
