import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';

// constants
import DetailsPageConstants from '../constants';
import StyleConstants from '../../../constants/style';

// images
import HEADPHONE from '../../../images/headphones.png';

// helpers
import * as TimeHelpers from '../../../helpers/time';

class Metadata extends Component {

    render() {
        const radio = this.props.isRadio ? <Image style={styles.headphone} source={HEADPHONE}/> : null;
        const start = new Date(this.props.start);

        return (
            <View
                style={styles.container}
            >
                <Text style={styles.start}>{`${TimeHelpers.formatTime(start)},`}</Text>
                <Text style={styles.duration}>{TimeHelpers.formatDuration(this.props.duration)}</Text>
                {radio}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
    }, start: {
        color: '#fff',
        fontSize: 23,
    }, duration: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 23,
    }, headphone: {
        width: DetailsPageConstants.HEADPHONE_WIDTH,
        height: DetailsPageConstants.HEADPHONE_HEIGHT,
        resizeMode: 'contain',
        marginLeft: 10,
        marginTop: -10,
    }

});

export default Metadata;
