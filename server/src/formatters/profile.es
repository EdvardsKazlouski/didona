export const formatProfile = (profile) => {
    return {
        email: profile.email,
        unlockedChannels: profile.unlockedChannels,
        currentChannelId: profile.currentChannelId,
    };
};
