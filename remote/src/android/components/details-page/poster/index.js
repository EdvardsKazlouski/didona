import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';

// constants
import NetworkConstants from '../../../constants/networking';
import DetailsPageConstants from '../constants';

class Poster extends Component {

    render() {
        const source = `${NetworkConstants.DATA_SERVER_URL}${NetworkConstants.API.POSTER.replace('${source}', this.props.src)}`;

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
        width: DetailsPageConstants.POSTER_WIDTH,
        height: DetailsPageConstants.POSTER_HEIGHT,
    },
    image: {
        width: DetailsPageConstants.POSTER_WIDTH,
        height: DetailsPageConstants.POSTER_HEIGHT,
        resizeMode: 'contain',
    }

});

export default Poster;
