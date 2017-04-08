import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    Image,
    ListView,
    Text,
    View,
} from 'react-native';
import { connect } from 'react-redux';

// components
import SearchItem from './item';

// constants
import StyleConstants from '../../constants/style';
import Locale from '../../constants/locale';

// selectors
import SearchSelector from './selector';

// actions
import * as Actions from './actions';

// images
import SEARCH from '../../images/search.png';

// helpers
import * as ChannelsHelper from '../../helpers/channels';

class Search extends Component {

    constructor(props) {
        super(props);

        this.dataSource = new ListView.DataSource({
            rowHasChanged: this.rowHasChanged,
        });
    }

    renderRow = (row) => {
        return <SearchItem item={row} channel={ChannelsHelper.getChannel(this.props.channels, row.channelId)}/>;
    };

    onSearchStart = () => {
        Actions.search(this.props.query);
    };

    render() {
        const content = this.empty ? (
            <View style={styles.emptyMessageContainer}>
                <Text style={styles.emptyTitle}>
                    {Locale.EMPTY_RESULTS_MESSAGE_TITLE}
                </Text>
                <Text style={styles.emptyMessage}>
                    {Locale.EMPTY_RESULTS_MESSAGE_DESCRIPTION}
                </Text>
            </View>
        ) : (
            <View style={styles.listContainer}>
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                />
            </View>
        );


        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        onChangeText={Actions.updateQuery}
                        onSubmitEditing={this.onSearchStart}
                        value={this.props.query}
                        underlineColorAndroid={StyleConstants.smileYellow}
                    />
                    <Image
                        onTouchEnd={this.onSearchStart}
                        style={styles.searchIcon}
                        source={SEARCH}
                    />
                </View>
                {content}
            </View>
        );
    }

    componentWillUpdate(nextProps) {
        if (nextProps.results.length !== this.props.results.length) {
            this.dataSource = this.dataSource.cloneWithRows(nextProps.results);
        }

        if (nextProps.searchStarted && nextProps.results.length === 0) {
            this.empty = true;
        } else {
            this.empty = false;
        }
    }


    rowHasChanged (row1, row2) {
        return row1.id !== row2.id;
    }

    componentWillUnmount () {
        Actions.clear();
    }

}

// list view
// component: channel icon + title + start & end time + button details

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, inputContainer: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }, input: {
        flex: 1,
        height: 70,
        fontSize: 20,
        color: StyleConstants.whitePower,
        marginLeft: 20,
    }, searchIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
        marginHorizontal: 20,
    }, listContainer: {
        height: 980,
    }, emptyTitle: {
        fontSize: 25,
        color: StyleConstants.whitePower,
    }, emptyMessage: {
        fontSize: 22,
        color: StyleConstants.lightGrey,
    }, emptyMessageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        marginTop: 50,
    }
});

export default connect(SearchSelector)(Search);
