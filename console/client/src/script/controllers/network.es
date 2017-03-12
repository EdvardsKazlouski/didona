export function getSound(url) {
    return new Promise((resolve, reject) => {
        const getSound = new XMLHttpRequest();
        getSound.open('GET', url, true);
        getSound.responseType = 'arraybuffer';

        getSound.onload = () => {
            resolve(getSound.response);
        };

        getSound.send();
    });
}