import express from 'express';

// server middleware
import { setup as setupExpress } from './middleware/express';

const app = express();

export function start () {
    setupExpress(app).then(() => {
        console.log('CONSOLE SERVER STARTED.');
    });
}

start();
