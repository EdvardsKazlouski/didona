import path from 'path';
import express from 'express';
import cookieParser from 'cookie-parser';
import CLC from 'cli-color';

// express helper modules
import bodyParser from 'body-parser';
import hpp from 'hpp';

// helpers
import { errorHandler } from '../helpers/error_handler';

// constants
import { EXPRESS } from '../constants/config';

// api
import apiRouter from '../routes/api';

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

        app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        });

        app.use('/', apiRouter);

        app.use('/static/video', express.static(path.join(__dirname, '../static/video')));
        app.use('/static/audio', express.static(path.join(__dirname, '../static/audio')));
        app.use('/static/logo', express.static(path.join(__dirname, '../static/logo')));
        app.use('/static/poster', express.static(path.join(__dirname, '../static/poster')));

        app.use(errorHandler);

        app.listen(app.get('port'), () => {
            console.log(CLC.green(`EXPRESS START ON PORT: ${app.get('port')}`));

            resolve();
        });
    });
}
