import mongoose from 'mongoose';
import CLC from 'cli-color';

// constants
import { MONGO } from '../constants/config';

mongoose.Promise = Promise;

// module local variable
let mongo = null;

export function setup () {
    return new Promise((resolve, reject) => {

        if (mongo) {
            mongoose.connection.close();
            mongo = null;
        }

        mongoose.connection.once('open', () => {
            console.log(CLC.green('\nCONNECTED TO MONGO\n'));

            mongo = mongoose.connection;
            resolve();
        });

        mongoose.connection.on('error', (err) => {
            if (err) {
                console.error(CLC.red(err));
            }

            reject();
        });

        mongoose.connect(MONGO.URI, MONGO.OPTIONS);
    });
}
