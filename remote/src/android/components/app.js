import React, { Component } from 'react';
import { Router, Route, Animations, Schema } from 'react-native-redux-router';
import {
    StyleSheet,
    View,
} from 'react-native';

// constants
import StyleConstants from '../constants/style';
import ROUTES from '../constants/routes';

// components
import Loading from './loading';
import Home from './home';
import DetailsPage from './details-page';
import Search from './search';
import NavBar from './nav-bar';
import ErrorComponent from './error';

import Header from './header';

class App extends Component {
    render(){
        return (
            <View style={styles.container}>
                <Header/>
                <Router>
                    <Schema name="modal" sceneConfig={Animations.FlatFloatFromBottom} navBar={NavBar}/>
                    <Schema name="default" sceneConfig={Animations.FlatFloatFromRight} navBar={NavBar}/>

                    <Route name={ROUTES.LOADING} component={Loading} initial={true} hideNavBar={true}/>
                    <Route name={ROUTES.HOME} component={Home} hideNavBar={true}/>
                    <Route name={ROUTES.SEARCH} component={Search} schema="modal" hideNavBar={true}/>
                    <Route name={ROUTES.DETAILS_PAGE} component={DetailsPage} schema="modal" hideNavBar={true}/>
                    <Route name={ROUTES.ERROR} component={ErrorComponent} schema="popup" hideNavBar={true}/>
                </Router>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: StyleConstants.blackShadow
    }
});

export default App;
