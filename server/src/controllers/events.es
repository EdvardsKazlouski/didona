// model
import EventSchema from '../model/event';

// formatters
import { formatEvents } from '../formatters/events';

// constants
import { STATUS_CODES } from '../constants/http';

export const getEventsByChannelId = (req, res) => {
    const channelId = req.params.channelId;

    EventSchema.getEventsByChannelId(channelId)
        .then((events) => {
            res.json(formatEvents(events));
        })
        .catch(() => {
            res.status(STATUS_CODES.STATUS_500).end();
        });
};

export const search = (req, res) => {
    const query = req.params.query;

    EventSchema.search(query)
        .then((events) => {
            res.json(formatEvents(events));
        })
        .catch(() => {
            res.status(STATUS_CODES.STATUS_500).end();
        });
};
