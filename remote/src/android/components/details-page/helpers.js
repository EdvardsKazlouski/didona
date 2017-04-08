import * as EventHelpers from '../../helpers/events';
import * as ChannelsHelpers from '../../helpers/channels';

export function findEventById(events, searchResults, id) {
    const event = EventHelpers.getEvent(events, id);
    return event || EventHelpers.getEvent(searchResults, id);
}

export function findChannelByEvent (channels, event) {
    return ChannelsHelpers.getChannel(channels, event.get('channelId'));
}
