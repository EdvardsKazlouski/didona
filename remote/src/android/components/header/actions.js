// navigation
import { Actions } from 'react-native-redux-router';

export function goToHome () {
    Actions.pop();
}

export function goToSearch () {
    Actions.search();
}
