import express from 'express';
import CLC from 'cli-color';

// server middleware
import { setup as setupExpress } from './middleware/express';
import { setup as setupMongo } from './middleware/mongo';

const app = express();

export function start () {
    Promise.all([
        setupExpress(app),
        setupMongo(app),
    ]).then(() => {
        console.log(CLC.blue('SERVER STARTED.'));
    });
}

start();
