import express from 'express';

import * as ModelController from '../controllers/model';
import * as PlayoutController from '../controllers/playout';

// controllers
const router = express.Router();

router.get('/state', ModelController.getState);

router.post('/play', PlayoutController.play);

router.post('/pause', PlayoutController.pause);

export default router;
