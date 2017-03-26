// constants
import NetworkConstants from '../constants/networking';

export function get(url) {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: NetworkConstants.HTTP_METHODS.GET,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
        .then((response) => response.json())
        .then((responseJson) => {
            resolve(responseJson);
        })
        .catch((error) => {
            reject(error);
        });
    });

}

