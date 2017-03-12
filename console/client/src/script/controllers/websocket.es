import Constants from 'constants/common';
import * as MainController from 'controllers/main';

let connection;

export function setup () {
    return new Promise((resolve, reject) => {
        connection = new WebSocket(Constants.SERVER_URL);
        
        connection.onopen = function () {
            console.log('onopen connection');
            resolve();
        };

        connection.onerror = function (error) {
            // an error occurred when sending/receiving data
            console.log('network error');
            reject();
        };

        connection.onmessage = function (message) {
            try {
                var json = JSON.parse(message.data);
            } catch (e) {
                console.log('This doesn\'t look like a valid JSON: ', message.data);
                return;
            }

            MainController.onmessage(json);
        };
    });
}
