import mongoose from 'mongoose';
import _ from 'lodash';
import CLC from 'cli-color';

// constants
import { MONGO } from '../../src/constants/config';

// models
import Channel from '../../src/model/channel';

// mock data
import mockChannels from '../mock/channels';

mongoose.Promise = global.Promise;

const fillChannels = () => {
    console.log(CLC.yellow('\nSTART FILLING CHANNELS\n'));

    const channels = _.map(mockChannels.channels, (channel) => {
        return Channel.save(channel);
    });

    return Promise.all(channels);
};


mongoose.connection.once('open', () => {
    console.log(CLC.yellow('\nSTART FILLING DB\n'));

    fillChannels()
        .then(() => {
            console.log(CLC.blue('FILLING CHANNELS COMPLETED\n'));
            mongoose.connection.close();
        })
        .catch((error) => {
            console.log(CLC.red('FILLING CHANNELS ERROR\n'));
            mongoose.connection.close();
        });


    // console.log(CLC.blue('\nFILLING COMPLETED\n'));
    // mongoose.connection.close();
});

mongoose.connect(MONGO.URI, MONGO.OPTIONS);
