import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';

// router actions
import * as InitActions from '../../actions/init';

// constants
import Locale from '../../constants/locale';
import StyleConstants from '../../constants/style';

class Loading extends Component {

    constructor () {
        super();

        this.state = {
            visible: true,
        };
    }
                // <Spinner
                //     color={StyleConstants.smileYellow}
                //     overlayColor={'rgba(0, 0, 0, 0)'}
                //     visible={this.state.visible}
                //     textContent={''}
                //     textStyle={{}}
                // />

    render () {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    {Locale.KEY_LOADING}
                </Text>
            </View>
        );
    }

    componentDidMount () {
        InitActions.initApp().then(this.hideSpinner).catch(this.hideSpinner);
    }

    hideSpinner = () => {
        this.setState({
            visible: false
        });
    };

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
        marginTop: 60,
        color: StyleConstants.whitePower,
        fontFamily: 'Verdana'
    }
});

export default Loading;
