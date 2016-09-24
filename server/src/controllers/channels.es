// model
import ChannelSchema from '../model/channel';

// formatters
import { formatChannels } from '../formatters/channels';

// constants
import { STATUS_CODES } from '../constants/http';

export const getAllChannels = (req, res) => {
    ChannelSchema.getAll()
        .then((channels) => {
            res.json(formatChannels(channels));
        })
        .catch(() => {
            res.status(STATUS_CODES.STATUS_500).end();
        });
};