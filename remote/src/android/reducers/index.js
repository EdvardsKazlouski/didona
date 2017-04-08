import { routerReducer } from 'react-native-redux-router';

// custom reducers
import channelsReducer from './channels';
import eventsReducer from './events';
import systemReducer from './system';
import searchReducer from './search';
import playoutReducer from './playout';

const reducers = {
    channels: channelsReducer,
    events: eventsReducer,
    playout: playoutReducer,
    routerReducer,
    system: systemReducer,
    search: searchReducer,
};

export default reducers;
