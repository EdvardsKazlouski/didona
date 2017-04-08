import Immutable from 'immutable';

// action types
import ActionTypes from '../action_types/channels';

const initialState = Immutable.fromJS({
    channelsList: [],
    currentChannelId: '',
    currentChannelIndex: 0,
});

export default function channelsReducer (state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SAVE_CHANNELS:
            return state.set('channelsList', Immutable.fromJS(action.payload));

        case ActionTypes.SET_CURRENT_CHANNEL_ID:
            return state.set('currentChannelId', action.payload);

        case ActionTypes.SET_CURRENT_CHANNEL_INDEX:
            return state.set('currentChannelIndex', action.payload);

        default:
            return state;
    }
}
