# Remote for the didona

Remote for the didona it's an android app, that was written using `react-native`.

## Install
1. Install `node-js `. https://github.com/creationix/nvm.
2. Install `react-native` globally. Execute `npm install -g react-native-cli`.
3. Install `Java` and `Android SDK`. http://facebook.github.io/react-native/releases/0.23/docs/android-setup.html.
4. Install `VirtualBox` and `Genymotion`. http://ubuntuhandbook.org/index.php/2014/02/install-android-emulator-ubuntu-linux/.
5. Execute `npm install`.

## Run
1. Open genymotion and start an virtual device.
2. Build packages and start UI using `react-native start` or `npm run start` with `sudo` rights.
3. Just execute for start emulation `react-native run-android` or `npm run open`.

## Debug
1. Open in chrome `http://localhost:8081/debugger-ui` and tap `f12`.
2. in Genymotion tap menu -> Remote JS Debugging.
