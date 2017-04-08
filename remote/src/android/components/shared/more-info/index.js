import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

// constants
import StyleConstants from '../../../constants/style';
import Locale from '../../../constants/locale';

class MoreInfo extends Component {

    render() {
        return (
            <View onTouchEnd={this.props.onClick} style={styles.container}>
                <Text style={styles.text}>{Locale.KEY_MORE_INFO}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: 180,
        height: 60,
        backgroundColor: StyleConstants.smileYellow,
        marginTop: 10,
        marginLeft: 10,
    }, text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: StyleConstants.blackShadow,
        fontSize: 25,
        width: 180,
        height: 60,
    }
});

export default MoreInfo;
