import * as WebSocketController from './websocket';
import { success } from '../helpers/response';
import model from '../model';

export const play = (request, response) => {
    const {
        source,
        isRadio
    } = request.body;

    WebSocketController.notify('play', {
        source,
        isRadio
    });

    model.setSource(source);
    model.setStartTime(new Date());

    success(response);
};

export const pause = (request, response) => {
    WebSocketController.notify('pause');

    model.setSource('');
    model.setStartTime(null);

    success(response);
};
