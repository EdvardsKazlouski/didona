import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';

import * as SwiperConstants from '../constants';

class Phantom extends Component {

    render() {
        return (
            <View style={styles.container} >
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: SwiperConstants.ITEM_WIDTH,
        height: SwiperConstants.ITEM_HEIGHT,
        marginHorizontal: SwiperConstants.MARGIN_HORIZONTAL,
        marginVertical: SwiperConstants.MARGIN_VERTICAL,
        // borderWidth: 1,
        // borderColor: 'red',
    }

});

export default Phantom;
