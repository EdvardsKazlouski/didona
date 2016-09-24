import express from 'express';
import path from 'path';

// controllers
import * as ChannelsControllers from '../controllers/channels';

const router = express.Router();

router.get('/channels', ChannelsControllers.getAllChannels);

router.get('/events/:channel_id/:start/:end', (req, res) => {
    res.json([{
        id: '1',
    }, {
        id: '2',
    }]);
});

router.get('/profile/:email', (req, res) => {
    res.json({
        email: 'email',
        unlockedChannels: ['1'],
        currentChannel: '2'
    });
});

router.get('/search/:query', (req, res) => {
    res.json([{
        id: '2'
    }]);
});

router.get('/static/video', express.static(path.join(__dirname, '../static/video')));
router.get('/static/logo', express.static(path.join(__dirname, '../static/logo')));
router.get('/static/poster', express.static(path.join(__dirname, '../static/poster')));

export default router;

