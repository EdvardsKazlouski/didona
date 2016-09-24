// model
import ChannelSchema from '../model/channel';

// constants
import { STATUS_CODES } from '../constants/http';

export const getAllChannels = (req, res) => {
    ChannelSchema.getAll()
        .then((channels) => {
            res.json(channels);
        })
        .catch(() => {
            res.status(STATUS_CODES.STATUS_500).end();
        });
};