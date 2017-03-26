import _ from 'lodash';
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// constants
import * as Contants from './constants';

// componetns
import Phantom from './phantom';

class Swiper extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: 0,
            size: 0,
        };

        this.itemHeight = Contants.ITEM_HEIGHT + Contants.MARGIN_VERTICAL * 2;
        this.swipeY = 0;
        this.swipeX = 0;

        this.items = null;
    }

    getPhantomElement () {
        return <Phantom key={Math.random()}/>;
    }

    getEmptyElements () {
        return [
            this.getPhantomElement(),
            this.getPhantomElement()
        ];
    }

    componentWillMount () {
        this.setState({
            selectedIndex: this.props.selectedIndex + Contants.DELTA_SIZE,
            size: this.props.items.size + 2 * Contants.DELTA_SIZE,
            translateY: -this.props.selectedIndex * this.itemHeight,
        });

        this.maxTranslateY = 0;
        this.minTranslateY = -(this.props.items.size - 1) * this.itemHeight;

        this.minSelectedIndex = Contants.DELTA_SIZE;
        this.maxSelectedIndex = this.props.items.size + Contants.DELTA_SIZE - 1;
    }

    createItems() {
        let itemsComponents = this.getEmptyElements();

        this.props.items.forEach(item => {
            itemsComponents.push(<this.props.Child item={item} key={item.get('id')}/>);
        });

        itemsComponents = itemsComponents.concat(this.getEmptyElements());

        return itemsComponents;
    }

    getItems () {
        return this.items || this.createItems();
    }

    setTranslateY (translateY) {
        this.setState(_.assign({}, this.state, {
            translateY,
        }));
    }

    render () {

        return (
            <View
                style={this.getStyle()}
                onTouchStart={this.onTouchStart}
                onTouchMove={this.onTouchMove}
                onTouchEnd={this.onTouchEnd}
            >
                {this.getItems()}
            </View>
        );
    }

    getStyle () {
        return {
            flexDirection: 'column',
            width: Contants.SWIPER_WIDTH,
            overflow: 'visible',
            height: this.state.size * this.itemHeight,
            transform: [
                { translateY: this.state.translateY, },
            ]
        };
    }

    // HANDLERS
    onTouchStart = (event) => {
        this.swipeY = event.nativeEvent.pageY;
        this.translateY = this.state.translateY;
    };

    onTouchMove = (event) => {
        const swipeDelta = this.swipeY - event.nativeEvent.pageY;
        const translateY = this.translateY - swipeDelta;

        if (translateY < this.minTranslateY || translateY > this.maxTranslateY) {
            return;
        }

        this.setTranslateY(translateY);
    };

    onTouchEnd = (event) => {
        const swipeDelta = this.swipeY - event.nativeEvent.pageY;

        if (Math.abs(swipeDelta) < Contants.SWIPE_DELTA ) {
            this.setTranslateY(this.translateY);
        } else {
            const selectedIndex = this.state.selectedIndex + Math.round(swipeDelta / this.itemHeight);

            if (selectedIndex < this.minSelectedIndex || selectedIndex > this.maxSelectedIndex) {
                return;
            }

            this.setState(_.assign({}, this.state, {
                selectedIndex,
                translateY: -(selectedIndex - Contants.DELTA_SIZE) * this.itemHeight
            }));
        }

    };
}

export default Swiper;
