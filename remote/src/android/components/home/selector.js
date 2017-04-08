export default function (state) {
    return {
        channels: state.channels.get('channelsList'),
        currentChannelId: state.channels.get('currentChannelId'),
        currentChannelIndex: state.channels.get('currentChannelIndex'),
        showEvents: state.system.get('showEvents'),
        events: state.events.get('eventsList'),
    };
}