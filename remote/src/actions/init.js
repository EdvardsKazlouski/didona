// navigation
import { Actions } from 'react-native-redux-router';

// router actions
import * as NetworkActions from './network';
import * as ChannelActions from './channels';
import * as EventsAction from './events';

// store
import store from '../store';

// selectors
import * as ChannelsSelectors from '../selectors/channels';

export function initApp() {
    return new Promise((resolve, reject) => {
        NetworkActions.connectToNetwork().then(() => {
            ChannelActions.loadChannels().then(() => {
                const state = store.getState();
                const channelsList = ChannelsSelectors.channelsList(state);
                const channelIndex = 2;
                const channelId = channelsList.get(channelIndex).get('id');

                ChannelActions.setCurentChannelIndex(channelIndex);
                ChannelActions.setCurentChannelId(channelId);

                EventsAction.loadEventsByChannelId(channelId)
                    .then(() => {
                        console.log(store.getState());
                        resolve();
                        Actions.home();
                    })
                    .catch((error) => {
                        resolve();
                        console.error(error);
                        Actions.error();
                    });
            });
        });
    });
}
