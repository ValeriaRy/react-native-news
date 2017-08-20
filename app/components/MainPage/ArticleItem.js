import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Dimensions,
    Image
} from 'react-native';

import PropTypes from 'prop-types';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    article:{
        paddingVertical: 15,
        paddingHorizontal: width * 0.05,
        borderBottomWidth: 1,
        borderBottomColor: "#000000",
        alignItems: 'center'
    },
    image: {
        width: width * 0.9, 
        height: height * 0.2,
        backgroundColor: 'black'
    },
    title: {
        marginTop: 5,
        color: "#1e98fa",
        fontSize: 16,
        alignSelf: 'stretch'
    },
    description: {
        marginTop: 5,
        fontSize: 12,
        alignSelf: 'stretch'
    },
    authorContainer: {
        flexDirection: 'row', 
        marginTop: 10
    },
    authortext: {
        flex: 0.3,
        fontSize: 12
    },
    author: {
        flex: 0.7, 
        fontSize: 12
    }
});

export default class ArticleItem extends Component {
    render() {
        return (
            <View style={styles.article}>
                { this.props.data.urlToImage
                  ? <Image 
                        style={styles.image}
                        source={{uri: this.props.data.urlToImage}}
                    />
                   : null
                }
                <Text style={styles.title}>{this.props.data.title}</Text>
                <Text style={styles.description}>{this.props.data.description}</Text>
                { this.props.data.author
                  ? <View style={styles.authorContainer}>
                        <Text style={styles.authortext}>author:</Text>
                        <Text style={styles.author}>{this.props.data.author}</Text>
                     </View>
                   : null
                }
            </View>
        );
    }
}

ArticleItem.propTypes = {
  data: PropTypes.object.isRequired,
};