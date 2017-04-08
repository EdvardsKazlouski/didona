import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// components
import ProgressBar from './progress-bar';
import MoreInfo from '../../shared/more-info';

// constants
import HomeConstants from '../constants';
import StyleConstants from '../../../constants/style';

// helpers
import * as TimeHelpers from '../../../helpers/time';

// actions
import * as EventActions from './actions';

class Event extends Component {

    onTouchEnd = () => {
        EventActions.goToDetailsPage(this.props.id);
    }; 

    render() {
        const now = (new Date()).getTime();
        const start = TimeHelpers.formatTime(new Date(this.props.start));
        const end = TimeHelpers.formatTime(new Date(this.props.start + this.props.duration));
        const progress = this.props.isCompleted ? 1 : this.props.isNow ? ((now - this.props.start) / this.props.duration) : 0;

        return (
            <View
                style={styles.container}
            >
                <ProgressBar progress={progress}/>
                <Text style={styles.title}>
                    {this.props.name}
                </Text>
                <Text style={styles.time}>
                    {`${start} - ${end}`}
                </Text>
                <MoreInfo onClick={this.onTouchEnd} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        color: StyleConstants.whitePower,
        fontSize: 30,
        width: HomeConstants.EVENT_TITLE_WIDTH,
        marginLeft: 10,
        marginTop: 10
    }, time: {
        marginTop: 10,
        marginLeft: 10,
        color: StyleConstants.lightGrey,
        fontSize: 20
    },
});

export default Event;
