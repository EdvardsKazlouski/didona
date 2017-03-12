import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';

// express helper modules
import bodyParser from 'body-parser';
import hpp from 'hpp';

// helpers
import { errorHandler } from '../helpers/error_handler';

// constants
import { EXPRESS } from '../constants/config';

// routers
import apiRouter from '../routes/api';
import staticRouter from '../routes/static';

// websocket
import { setup as setupWebSocket } from '../controllers/websocket';

export function setup (app) {
    return new Promise((resolve/*, reject*/) => {
        // port
        app.set('port', EXPRESS.PORT);

        // body parser
        app.use(
            bodyParser.urlencoded({
                extended: true,
            })
        );
        app.use(bodyParser.json());
        app.use(cookieParser());

        app.use(hpp());

        app.set('view engine', 'ejs');
        app.set('views', path.join(__dirname, '../templates'));

        app.use('/', apiRouter);
        app.use('/', staticRouter);
        app.use('/client', express.static(path.join(__dirname, '../../../client/dist')));

        app.use(errorHandler);

        const server = app.listen(app.get('port'), () => {
            console.log(`EXPRESS STARTED ON PORT: ${app.get('port')}`);

            resolve();
        });

        setupWebSocket(server);
    });
}
