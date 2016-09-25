import mongoose from 'mongoose';
import _ from 'lodash';
import CLC from 'cli-color';

// constants
import { MONGO } from '../../src/constants/config';

// models
import Channel from '../../src/model/channel';
import Event from '../../src/model/event';
import Profile from '../../src/model/profile';

// mock data
import mockChannels from '../mock/channels';
import mockEvents from '../mock/events';
import mockProfile from '../mock/profile';

mongoose.Promise = global.Promise;

const fillChannels = () => {
    console.log(CLC.yellow('START FILLING CHANNELS\n'));

    const channels = _.map(mockChannels.channels, (channel) => {
        return Channel.save(channel);
    });

    return new Promise((resolve, reject) => {
        Promise.all(channels)
            .then(() => {
                console.log(CLC.blue('FILLING CHANNELS COMPLETED\n'));
                resolve();
            })
            .catch(() => {
                console.log(CLC.red('FILLING CHANNELS ERROR\n'));
                resolve();
            });
    });
};

const fillEvents = () => {
    console.log(CLC.yellow('START FILLING EVENTS\n'));

    let events = [];

    let now = new Date();
    let start = (new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), 0, 0, 0)).getTime();

    _.forEach(mockEvents.channels, (channel) => {
        let startTime = start;
        events = events.concat(events, _.map(channel.events, (event) => {
            return new Promise((resolve ,reject) => {
                Channel.findByName(channel.name).then((channel) => {
                    return Event.save({
                        poster: event.poster,
                        title: event.title,
                        start: startTime,
                        duration: event.duration,
                        source: event.source,
                        channelId: channel.id,
                    })
                        .then(resolve)
                        .catch(reject);
                    startTime += event.duration;
                });
            });
        }));
    });

    return new Promise((resolve, reject) => {
        Promise.all(events)
            .then(() => {
                console.log(CLC.blue('FILLING EVENTS COMPLETED\n'));
                resolve();
            })
            .catch(() => {
                console.log(CLC.red('FILLING EVENTS ERROR\n'));
                resolve();
            });
    });
};

const fillProfile = () => {
    console.log(CLC.yellow('START FILLING PROFILE\n'));

    const profileAction = new Promise((resolve, reject) => {
        Channel.findByName(mockProfile.unlockedChannelName)
            .then((channel) => {
                return Profile.save({
                    email: mockProfile.profile.email,
                    unlockedChannels: [ channel.id ],
                });
            })
                .then(resolve)
                .catch(reject);
    });

    return new Promise((resolve, reject) => {
        profileAction
            .then(() => {
                console.log(CLC.blue('FILLING EVENTS COMPLETED\n'));
                resolve();
            })
            .catch(() => {
                console.log(CLC.red('FILLING EVENTS ERROR\n'));
                resolve();
            });
    });
};

mongoose.connection.once('open', () => {
    console.log(CLC.yellow('\nSTART FILLING DB\n'));

    fillChannels()
        .then(fillEvents)
        .then(fillProfile)
        .then(() => {
            console.log(CLC.blue('FILLING COMPLETED\n'));
            mongoose.connection.close();
        });
});

mongoose.connect(MONGO.URI, MONGO.OPTIONS);
