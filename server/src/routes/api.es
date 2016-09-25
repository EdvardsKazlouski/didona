import express from 'express';

// controllers
import * as ChannelsControllers from '../controllers/channels';
import * as EventsControllers from '../controllers/events';
import * as ProfileControllers from '../controllers/profile';

const router = express.Router();

router.get('/channels', ChannelsControllers.getAllChannels);

router.get('/events/:channelId', EventsControllers.getEventsByChannelId);

router.get('/profile/:email', ProfileControllers.getProfileByEmail);

router.get('/search/:query', EventsControllers.search);

export default router;
