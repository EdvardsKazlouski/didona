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

        app.use('/', apiRouter);

        app.use(errorHandler);

        app.listen(app.get('port'), () => {
            console.log(CLC.green(`EXPRESS START ON PORT: ${app.get('port')}`));

            resolve();
        });
    });
}
