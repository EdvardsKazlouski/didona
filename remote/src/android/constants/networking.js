export default {
    REMOTE_SERVER_URL: 'http://192.168.0.102:8887/',
    // REMOTE_SERVER_URL: 'http://192.168.1.4:8887/',
    // REMOTE_SERVER_URL: 'http://localhost:8887/',

    DATA_SERVER_URL: 'http://192.168.0.102:8888/',
    // DATA_SERVER_URL: 'http://192.168.1.4:8888/',
    // DATA_SERVER_URL: 'http://localhost:8888/',

    CONSOLE_WIFI_NETOWRK_SSID: 'WiredSSID',
    CONSOLE_WIFI_NETWORK_PWD: '',

    API: {
        CHANNELS: 'channels',
        EVENTS: 'events/${id}',
        LOGO: 'static/logo/${source}',
        POSTER: 'static/poster/${source}',
        SEARCH: 'search/${query}',
        PLAYOUT_STATE: 'state',
        PLAY: 'play',
        PAUSE: 'pause',
    },

    HTTP_METHODS: {
        GET: 'GET',
        POST: 'POST',
    },
};
