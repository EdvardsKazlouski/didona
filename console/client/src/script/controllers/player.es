import * as Renderer from 'renderer';

let sourceLoaded = false;
let timeoutFired = false;

export function sourceCanPlayed (isRadio) {
    sourceLoaded = true;
    tryPlay(isRadio);
}

export function tryPlay (isRadio) {
    if (sourceLoaded && timeoutFired) {
        if (!isRadio) {
            Renderer.showPlayer();
            Renderer.play();
        } else {
            Renderer.showMixer(sourceEnded);
        }

        sourceLoaded = false;
        timeoutFired = false;
    }
}

export function sourceEnded () {
    Renderer.showWaitingScreen();
}

export function startPlayout ({ source, isRadio }) {
    if (isRadio) {
        Renderer.setAudioSource(source, sourceCanPlayed.bind(this, isRadio), sourceEnded);
    } else {
        Renderer.setVideoSource(source, sourceCanPlayed.bind(this, isRadio));
    }

    setTimeout(() => { timeoutFired = true; tryPlay(isRadio) }, 5000);
}

export function pausePlayout () {
    Renderer.pause();
}
