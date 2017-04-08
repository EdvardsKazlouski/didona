export default function (state) {
    return {
        query: state.search.get('query'),
        results: state.search.get('results').toJS(),
        searchStarted: state.search.get('searchStarted'),
        channels: state.channels.get('channelsList'),
    };
}