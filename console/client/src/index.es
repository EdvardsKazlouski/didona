import 'style/index';
import * as WebSocket from 'controllers/websocket';
import * as Controller from 'controllers/main';
import * as Renderer from 'renderer';

window.onload = () => {
    Promise.all([
        WebSocket.setup(),
        Renderer.setup()
    ]).then(Controller.startWaiting);
};

