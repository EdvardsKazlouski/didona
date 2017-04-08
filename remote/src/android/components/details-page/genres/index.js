import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// constants
import DetailsPageConstants from '../constants';
import StyleConstants from '../../../constants/style';

class Genres extends Component {

    render() {
        const genres = this.props.genres;
        const genresLength = genres.size;
        let genresText = '';

        genres.forEach((genre, index) => {
            genresText += genre;

            if (index !== genresLength - 1) {
                genresText += ' | ';
            }

        });

        return (
            <View
                style={styles.container}
            >
                <Text
                    style={styles.genres}
                    numberOfLines={1}
                    ellipsizeMode='tail'
                >{genresText}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        width: DetailsPageConstants.POSTER_WIDTH,
        height: DetailsPageConstants.POSTER_HEIGHT,
        flexDirection: 'row',
        marginTop: 10,
    }, genres: {
        width: DetailsPageConstants.POSTER_WIDTH,
        color: StyleConstants.textGrey,
        fontSize: 23,
    }
});

export default Genres;
