import React, {Component} from 'react';
import { 
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ListView,
  Image,
  Alert,
  AsyncStorage,
} from 'react-native';

import PropTypes from 'prop-types';

import ArticleItem from './ArticleItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoutButton: {
    width: 40, 
    height: 40, 
    position: 'absolute', 
    top: 5,
    right: 5,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.6    
  },
  logoutImage: {
    flex: 1, 
    resizeMode: 'contain'
  }
});

export default class MainPage extends Component {
  componentDidMount() {
      AsyncStorage.getItem("news").then((value) => {
          if(value) {              
            this.props.changeNewsList(JSON.parse(value)); 
          } else {
            this.props.getNews();
          }
      })
  }

 componentWillReceiveProps(nextProps) {
     if (!this.props.newsList.length && nextProps.newsList.length) {
        AsyncStorage.setItem('news', JSON.stringify(nextProps.newsList));
     }
 }

  createArticleItem = (item, rowId) => {      
    return (
      <ArticleItem data={item} />
    )
  }

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 }); 

  render() {    
    return (
      <View style={styles.container}>
        <ListView
            enableEmptySections={true}
            removeClippedSubviews={true}
            onEndReachedThreshold={0}
            automaticallyAdjustContentInsets={true}
            dataSource={this.ds.cloneWithRows(this.props.newsList)}
            renderRow={this.createArticleItem}
        />
        <TouchableHighlight 
            style={styles.logoutButton}
            underlayColor={'transparent'}
            onPress={() => this.props.logout()}
        >
            <Image 
                style={styles.logoutImage}
                source={require('../../images/logout.png')}
            />
        </TouchableHighlight>
      </View>
    )
  }
}

MainPage.propTypes = {
  logout: PropTypes.func.isRequired,
};