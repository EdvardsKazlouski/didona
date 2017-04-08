import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Image,
    Text,
    View
} from 'react-native';
import Swiper from 'react-native-swiper';

// components
import VerticalSwiper from '../shared/swiper';
import Channel from './channel';
import Event from './event';

// selectors
import HomeSelector from './selector';

// images
import ROW from '../../images/arrow.png';

// constants
import HomeConstants from './constants';

// actions
import * as ChannelsActions from '../../actions/channels';
import * as SystemActions from '../../actions/system';

class Home extends Component {

    getEvents () {
        let result = [];
        const now = (new Date()).getTime();

        this.props.events.forEach((event, index) => {
            const start = event.get('start');
            const duration = event.get('duration');
            const id = event.get('id');

            let isNow = false;

            if (start < now && now < start + duration) {
                this.selectedIndex = index;
                isNow = true;
            }

            result.push(
                <Event
                    key={id}
                    id={id}
                    name={event.get('title')}
                    isNow={isNow}
                    isCompleted={now > start + duration}
                    start={start}
                    duration={duration}
                />
            );
        });

        return result;
    }

    render() {
        const events = !this.props.showEvents ? [] : this.getEvents();

        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image
                        style={styles.row}
                        source={ROW}
                    />
                </View>
                <VerticalSwiper
                    selectedIndex={this.props.currentChannelIndex}
                    items={this.props.channels}
                    Child={Channel}
                    onSwipeStart={SystemActions.hideEvents}
                    onSwipeEnd={ChannelsActions.updateCurrentChannel}
                />
                <View style={styles.swiperContainer}>
                    <View style={styles.neigborhood}/>
                    <Swiper
                        ref={swiper => this.swiper = swiper}
                        style={styles.swiper}
                        width={HomeConstants.HORIZONTAL_SWIPER_WIDTH}
                        height={HomeConstants.HORIZONTAL_SWIPER_HEIGHT}
                        loop={false}
                        showsPagination={false}
                        index={this.selectedIndex}
                    >
                        {events}
                    </Swiper>
                </View>
            </View>
        );
    }

    componentDidUpdate() {
        if (this.props.showEvents) {
            this.swiper.scrollBy(0, false);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    }, row: {
        width: 25,
        marginTop: 9,
        height: 25,
    }, rowContainer: {
        width: 30,
        flexDirection: 'column',
        justifyContent: 'space-around',
    }, neigborhood: {
        flex: 1,
    }, swiperContainer: {
        flexDirection: 'column',
    }
});

export default connect(HomeSelector)(Home);
