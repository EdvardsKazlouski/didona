export function formatChannels (channels) {
    let result = [];
    channels.forEach(channel => {
        result.push(formatChannel(channel));
    });

    return result;
}

export function formatChannel (channel) {
    return {
        logo: channel.logo + `?r=${Math.random()}`,
        id: channel.id,
        isLocked: channel.isLocked,
        isRadio: channel.isRadio,
        name: channel.name,
    };
}
