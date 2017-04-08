export function formatEvents (events) {
    let result = [];
    events.forEach(event => {
        result.push(formatEvent(event));
    });

    return result;
}

export function formatEvent (event) {
    return {
        id: event.id,
        channelId: event.channelId,
        description: event.description,
        duration: event.duration,
        genres: event.genres,
        poster: `${event.poster}?r=${Math.random()}`,
        source: event.source,
        start: event.start,
        title: event.title,
    };
}
