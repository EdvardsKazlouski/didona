import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// constants
import StyleConstants from '../../../constants/style';
import HomeConstants from '../constants';

class ProgressBar extends Component {

    getProgressStyle (progress) {
        return {
            backgroundColor: StyleConstants.smileYellow,
            height: 5,
            width: HomeConstants.HORIZONTAL_SWIPER_WIDTH * progress,
        };
    }

    render() {
        const progress = this.props.progress;
        const progressElement = progress >= 0 && progress <= 1 ? <View style={this.getProgressStyle(progress)}/> : null;

        return (
            <View
                style={styles.container}
            >
                {progressElement}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: StyleConstants.textGrey,
        height: 5,
    },
});

export default ProgressBar;
