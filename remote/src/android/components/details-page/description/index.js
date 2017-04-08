import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// constants
import StyleConstants from '../../../constants/style';

class Description extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.description}>{this.props.text}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    }, description: {
        color: StyleConstants.lightGrey,
        fontSize: 23,
    }
});

export default Description;
