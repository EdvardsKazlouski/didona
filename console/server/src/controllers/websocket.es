import { server as WebSocketServer } from 'websocket';

let connection = null;

export function setup(server) {
    // create the server
    const wsServer = new WebSocketServer({
        httpServer: server
    });

    // WebSocket server
    wsServer.on('request', function(request) {
        connection = request.accept(null, request.origin);
        let req = {};

        // This is the most important callback for us, we'll handle
        // all messages from users here.
        connection.on('message', function(message) {

            req = JSON.parse(message.utf8Data) || {};
            console.log('websocket server: receive message: ', req.type);

            switch (req.type) {
                default:
                break;
                // case 'stats':
                //     dbAdapter.getStats(req.mac).then(function (stats) {
                //         connection.send(JSON.stringify({
                //             type: 'stats',
                //             data: stats
                //         }));
                //     });
                // break;
            }
        });

        connection.on('close', function(connection) {
            console.log('websocket server close connection');
        });
    });
};

export function notify(type, data = {}) {
    connection.send(JSON.stringify({
        type,
        data
    }));
}
