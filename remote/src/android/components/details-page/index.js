import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';

// selectors
import DetailsPageSelector from './selector';

// helpers
import * as DetailsPageHelpers from './helpers';

// constants
import Locale from '../../constants/locale';
import StyleConstants from '../../constants/style';

// components
import Poster from './poster';
import Title from './title';
import Genres from './genres';
import Metadata from './metadata';
import Description from './description';

// actions
import * as DetailsPageActions from './actions';

class DetailsPage extends Component {

    onButtonClick = () => {
        if (this.props.playout.get('source') === this.event.get('source')) {
            DetailsPageActions.pause();
        } else {
            DetailsPageActions.play(this.event.get('source'), this.channel.get('isRadio'));
        }
    };

    render() {
        this.event = DetailsPageHelpers.findEventById(this.props.events, this.props.results, this.props.eventId);
        this.channel = DetailsPageHelpers.findChannelByEvent(this.props.channels, this.event);

        const title = this.event.get('title');
        const isSeries = title.includes('Season') || title.includes('Episode');
        const label = this.props.playout.get('source') === this.event.get('source') ? Locale.PAUSE_BUTTON : Locale.PLAY_BUTTON;

        return (
            <View style={styles.container}>
                <View style={styles.info}>
                    <Poster src={this.event.get('poster')}/>
                    <Genres genres={this.event.get('genres')}/>
                </View>
                <View style={styles.main}>
                    <Title title={title} isSeries={isSeries}/>
                    <Metadata start={this.event.get('start')} duration={this.event.get('duration')} isRadio={this.channel.get('isRadio')}/>
                    <Description text={this.event.get('description')} />
                    <View onTouchStart={this.onButtonClick} style={styles.watch}>
                        <Text style={styles.watchText}>{label}</Text>
                    </View>
                </View>
            </View>
        );
    }

    shouldComponentUpdate (nextProps) {
        return !!nextProps.eventId;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    }, info: {
        marginLeft: 10,
    }, main: {
        flex: 1,
        marginLeft: 20,
        flexDirection: 'column',
    }, watch: {
        width: 180,
        height: 60,
        backgroundColor: StyleConstants.smileYellow,
        marginTop: 10,
    }, watchText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        color: StyleConstants.blackShadow,
        fontSize: 25,
        width: 180,
        height: 60,
    }
});

export default connect(DetailsPageSelector)(DetailsPage);
