import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';

// constants
import NetworkConstants from '../../../constants/networking';
import * as SwiperConstants from '../../shared/swiper/constants';

class Channel extends Component {

    render() {
        const source = `${NetworkConstants.DATA_SERVER_URL}${NetworkConstants.API.LOGO.replace('${source}', this.props.item.get('logo'))}`;

        return (
            <View
                style={styles.container}
            >
                <Image
                    style={styles.image}
                    source={{ uri: source }}
                />
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
    },
    image: {
        width: SwiperConstants.ITEM_WIDTH,
        height: SwiperConstants.ITEM_HEIGHT,
        resizeMode: 'contain',
    }

});

export default Channel;
