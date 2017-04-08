// store
import store from '../../store';

// constants
import ROUTES from '../../constants/routes';

// navigation
import { Actions } from 'react-native-redux-router';

// helpers
import * as ChannelsHelpers from '../../helpers/channels';

// selectors
import * as ChannelsSelectors from '../../selectors/channels';

// actions
import * as PlayoutActions from '../../actions/playout';

export function openDetailsPage (id) {
    PlayoutActions.updatePlayoutData();
    Actions[ROUTES.DETAILS_PAGE](id);
}

export function pause () {
    PlayoutActions.pause().then(PlayoutActions.updatePlayoutData);
}

export function play (source, isRadio) {
    PlayoutActions.play(source, isRadio).then(PlayoutActions.updatePlayoutData);
}
