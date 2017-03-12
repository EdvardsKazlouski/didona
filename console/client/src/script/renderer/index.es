import Constants from 'constants/common';

import { getSound } from 'controllers/network';
import AudioVisualizer from 'renderer/audio_visualizator';

// templates
import AppTemplate from 'renderer/templates/app';
import WaitingTemplate from 'renderer/templates/waiting';
import LoadingTemplate from 'renderer/templates/loading';

let currentScreen;
let appContainer;
let viewContainer;
let videoPlayer;
let videoSource;

let canvas;
const audioVisualizator = new AudioVisualizer();
let sound;
let context;
let playSound;

export function setup () {
    appContainer = document.getElementById(Constants.APP_CONTAINER_ID);
    appContainer.innerHTML = AppTemplate;

    viewContainer = appContainer.children[0];
    videoPlayer = appContainer.children[1];
    videoSource = document.getElementById(Constants.VIDEO_PLAYER_SOURCE);

    canvas = document.getElementById(Constants.CANVAS_ID);

    audioVisualizator.setCanvas(canvas);
}

export function showWaitingScreen () {
    currentScreen = Constants.VIEWS.WAITING;

    viewContainer.innerHTML = WaitingTemplate;
    viewContainer.classList.remove('hidden');
}

export function showLoadingScreen () {
    viewContainer.classList.remove('hidden');
    currentScreen = Constants.VIEWS.LOADING;

    viewContainer.innerHTML = LoadingTemplate;
}

export function setVideoSource(source, onCanPlay, onEnd) {
    pause();
    audioVisualizator.stopRenderAudio();
    videoSource.src = `${Constants.VIDEO_URL}/${source}`;

    videoPlayer.oncanplay = onCanPlay;
    videoPlayer.addEventListener('ended', onEnd, false);

    videoPlayer.load();
}

export function showPlayer() {
    viewContainer.classList.add('hidden');
    videoPlayer.classList.remove('hidden');

    currentScreen = Constants.VIEWS.PLAYER;
}

function clear (onEnd) {
    if (context) {
        context.close();
    }
    context = null;
    if (onEnd) {
        onEnd();
    }
}

export function showMixer(onEnd) {
    viewContainer.classList.add('hidden');
    videoPlayer.classList.add('hidden');

    playSound = context.createBufferSource();
    playSound.buffer = sound;
    playSound.connect(context.destination);

    audioVisualizator.renderAudio({
        source: playSound,
        context
    }, clear, clear.bind(this, onEnd));

    playSound.start(0);
}

export function play() {
    videoPlayer.play();
}

export function pause() {
    videoPlayer.pause();
}

export const setAudioSource = (source, onCanPlay) => {
    pause();

    context = new window.AudioContext();

    getSound(`${Constants.AUDIO_URL}/${source}`).then((response) => {
        context.decodeAudioData(response, (buffer) => {

            sound = buffer;
            onCanPlay();
        });

    });
};
