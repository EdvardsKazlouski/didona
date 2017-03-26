import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

class DetailsPage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    DetailsPage
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: 'white',
    }
});

export default DetailsPage;