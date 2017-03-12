import express from 'express';

import { TITLE } from '../constants/config';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: TITLE
    });
});

export default router;
