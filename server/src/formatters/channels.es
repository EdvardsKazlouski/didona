import _ from 'lodash';

export const formatChannels = (channels = []) => {
    return _.map(channels, formatChannel);
};

export const formatChannel = (channel = {}) => {
    return {
        id: channel.id,
        logo: channel.logo,
        name: channel.name,
        isLocked: channel.isLocked,
        isRadio: channel.isRadio,
    };
};
