export default function (state) {
    return {
        channels: state.channels.get('channelsList'),
        events: state.events.get('eventsList'),
        results: state.search.get('results'),
        playout: state.playout,
        eventId: state.routerReducer.data && state.routerReducer.data.data,
    };
}