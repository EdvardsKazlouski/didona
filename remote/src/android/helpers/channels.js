export function getChannel(channels, channelId) {
    return channels.find(channel => channel.get('id') === channelId);
}
