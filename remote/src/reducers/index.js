import { routerReducer } from 'react-native-redux-router';

// custom reducers
import channelsReducer from './channels';
import eventsReducer from './events';

const reducers = {
    routerReducer,
    channels: channelsReducer,
    events: eventsReducer,
};

export default reducers;
