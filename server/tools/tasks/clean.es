import mongoose from 'mongoose';
import CLC from 'cli-color';

// constants
import { MONGO } from '../../src/constants/config';

// models
import Channel from '../../src/model/channel';
import Event from '../../src/model/event';
import Profile from '../../src/model/profile';

mongoose.connection.once('open', () => {
    console.log(CLC.yellow('\nSTART REMOVING DATA FROM DB\n'));

    Channel.removeAll()
        .then(() => Event.removeAll())
        .then(() => Profile.removeAll())
        .then(() => {
            console.log(CLC.blue('REMOVING COMPLETED\n'));
            mongoose.connection.close();
        });
});

mongoose.connect(MONGO.URI, MONGO.OPTIONS);