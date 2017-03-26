import wifi from 'react-native-android-wifi';

// constants
import NetworkConstants from '../constants/networking';

export function connectToNetwork() {
    return new Promise((resolve, reject) => {
        wifi.isEnabled((isEnabled)=>{
            if (isEnabled){
                console.log('wifi service enabled');
            } else {
                console.log('wifi service is disabled');
                wifi.setEnabled(true);
            }
            connectToConsole().then(resolve).catch(reject);
        });
    });
}

export function connectToConsole() {
    return new Promise((resolve, reject) => {
        console.log('try to connect to console');

        wifi.getSSID((ssid) => {
            if (ssid !== NetworkConstants.CONSOLE_WIFI_NETOWRK_SSID) {
                wifi.findAndConnect(
                    NetworkConstants.CONSOLE_WIFI_NETOWRK_SSID,
                    NetworkConstants.CONSOLE_WIFI_NETWORK_PWD, (found) => {
                    if (found) {
                        console.log('wifi is in range');

                        wifi.connectionStatus((isConnected) => {
                            if (isConnected) {
                                console.log('wifi network is connected');
                                resolve();
                            } else {
                                console.log('wifi network is not connected');
                                reject();
                            }
                        });
                    } else {
                        console.log('wifi is not in range');
                        reject();
                    }
                });
            } else {
                console.log('wifi is connected to correct network');
                resolve();
            }
        });
    });
}



