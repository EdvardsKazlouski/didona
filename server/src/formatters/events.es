import _ from 'lodash';

export const formatEvents = (events = []) => {
    return _.map(events, formatEvent);
};

export const formatEvent = (event) => {
    return {
        id: event.id,
        poster: event.poster,
        title: event.title,
        start: event.start,
        genres: event.genres,
        duration: event.duration,
        description: event.description,
        source: event.source,
        channelId: event.channelId,
    };
};
