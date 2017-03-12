import * as Renderer from 'renderer';
import Constants from 'constants/common';

import * as PlayerController from 'controllers/player';

export function startWaiting () {
    // show waiting screen
    Renderer.showWaitingScreen();
}

export function onmessage ({ type, data }) {
    switch(type) {
        case Constants.COMMANDS.PLAY:
            Renderer.showLoadingScreen();
            PlayerController.startPlayout(data);
        break;
        case Constants.COMMANDS.PAUSE:
            PlayerController.pausePlayout();
        break;
        default: break;
    }
}
