import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import Swiper from '../shared/swiper';

import Channel from './channel';

import HomeSelector from './selector';

class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    selectedIndex={this.props.currentChannelIndex}
                    items={this.props.channels}
                    Child={Channel}
                />
                <View style={styles.view}>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    }, view: {
        flex: 1,
    }
});

export default connect(HomeSelector)(Home);
