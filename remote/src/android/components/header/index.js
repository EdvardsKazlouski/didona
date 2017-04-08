import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';

// selector
import HeaderSelector from './selector';

// constants
import ROUTES from '../../constants/routes';

// images
import HOME from '../../images/home.png';
import SEARCH from '../../images/search.png';

// actions
import * as HeaderAction from './actions';

class Header extends Component {

    render() {
        console.log(this.props.route);

        // const home = this.props.route === ROUTES.LOADING ? null :
        const home = this.props.route === ROUTES.HOME || this.props.route === ROUTES.LOADING ? null :
            <Image
                onTouchStart={this.onHomeTouchStart}
                style={styles.home}
                source={HOME}
            />;

        const search = this.props.route === ROUTES.LOADING || this.props.route === ROUTES.SEARCH ? null :
            <Image
                onTouchStart={this.onSearchTouchStart}
                style={styles.search}
                source={SEARCH}
            />;

        return (
            <View style={styles.container}>
                {home}
                {search}
            </View>
        );
    }

    onHomeTouchStart = () => {
        HeaderAction.goToHome();
    };

    onSearchTouchStart = () => {
        HeaderAction.goToSearch();
    };
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 70,
    }, home: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        marginTop: 10,
        left: 10,
    }, search: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        position: 'absolute',
        marginTop: 10,
        right: 10,
    }
});

export default connect(HeaderSelector)(Header);
