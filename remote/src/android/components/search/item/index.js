import React, { Component } from 'react';
import {
    StyleSheet,
    Image,
    View,
    Text,
} from 'react-native';

// components
import MoreInfo from '../../shared/more-info';

// constants
import StyleConstants from '../../../constants/style';
import NetworkConstants from '../../../constants/networking';
import Constants from './constants';

// actions
import * as Actions from '../actions';

class SearchItem extends Component {

    render() {
        const source = `${NetworkConstants.DATA_SERVER_URL}${NetworkConstants.API.LOGO.replace('${source}', this.props.channel.get('logo'))}`;

        return (
            <View style={styles.container} >
                <Image
                    style={styles.image}
                    source={{ uri: source }}
                />
                <Text
                    style={styles.title}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                >
                    {this.props.item.title}
                </Text>
                <MoreInfo onClick={this.onClick}/>
            </View>
        );
    }

    onClick = () => {
        Actions.goToDetailsPage(this.props.item.id);
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: Constants.SEARCH_ITEM_HEIGHT,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    }, image: {
        resizeMode: 'contain',
        width: Constants.SEARCH_ITEM_LOGO_WIDTH,
        height: Constants.SEARCH_ITEM_LOGO_HEIGHT,
        marginLeft: 10,
    }, title: {
        marginLeft: 20,
        fontSize: 24,
        lineHeight: 28,
        color: StyleConstants.whitePower,
        width: 400,
        height: 28,
    }
});

export default SearchItem;
