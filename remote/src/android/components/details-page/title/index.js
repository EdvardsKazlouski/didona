import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// constants
import DetailsPageConstants from '../constants';
import StyleConstants from '../../../constants/style';

class Title extends Component {

    render() {
        let title = this.props.title;
        let subtitle = null;

        if (this.props.isSeries) {
            const indexOfSeason = title.indexOf('Season') || title.indexOf('Episode');
            const subtitleText = title.substring(indexOfSeason, 200);

            title = title.substring(0, indexOfSeason - 1);

            subtitle = (<Text style={styles.subtitle}>
                {subtitleText}
            </Text>);
        }

        return (
            <View
                style={styles.container}
            >
                <Text style={styles.title}>
                    {title}
                </Text>
                {subtitle}
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
    }, title: {
        color: StyleConstants.whitePower,
        fontSize: 35,
        marginTop: 20,
    }, subtitle : {
        color: StyleConstants.lightGrey,
        fontSize: 25,
        marginTop: 10,
    }

});

export default Title;
