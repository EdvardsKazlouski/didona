import Locale from 'constants/locale';
import Constants from 'constants/common';

export default `
    <div class="view-container"></div>
    <video id="${Constants.VIDEO_PLAYER_ID}" class="video-player" width="100%" height="100%">
        <source id="${Constants.VIDEO_PLAYER_SOURCE}" src="" type="video/mp4" />
    </video>
    <div class="audio-player-container">
        <canvas id="${Constants.CANVAS_ID}" class="audio-player">
        </canvas>
    </div>
`;
    // <audio id="{${Constants.AUDIO_PLAYER_ID}}">
    //     <source id="${Constants.AUDIO_PLAYER_SOURCE}" src="" type="audio/mpeg">
    // </audio>