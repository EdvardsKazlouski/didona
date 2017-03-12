import * as WebSocketController from './websocket';
import { success } from '../helpers/response';

export const play = (request, response) => {
    const {
        source,
        isRadio
    } = request.body;

    WebSocketController.notify('play', {
        source,
        isRadio
    });

    success(response);
};

export const pause = (request, response) => {
    WebSocketController.notify('pause');

    success(response);
};
