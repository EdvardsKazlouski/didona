import _ from 'lodash';

export const formatEvents = (events = []) => {
    return _.map(events, formatEvent);
};

export const formatEvent = (event) => {
    return {
        poster: event.poster,
        title: event.title,
        start: event.start,
        duration: event.duration,
        source: event.source,
        channelId: event.channelId,
    };
};
