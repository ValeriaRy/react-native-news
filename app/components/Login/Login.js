import React, {Component} from 'react';
import { 
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  TextInput
} from 'react-native';

import PropTypes from 'prop-types';
import { loginValidation, emailValidation } from './../../utils/validation';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4de384'
  },
  errorMessage: {
      color: '#a82a1a'
  },
  inputContainer: {
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderRadius: 10
  },
  textInput: {
    width: width * 0.5,
    backgroundColor: '#ffffff',
    textAlign: 'center',
    padding: 0
  },
  button: {
    backgroundColor: '#c0f9d5',
    paddingVertical: 5,
    width: width * 0.3,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center'
  },
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {
          login: '',
          password: ''
      }
    };
  }

  onInputTextChange = (text, propName) => {
      let tmpPayload = {};
      let payload = {};

      tmpPayload[propName] = text;
      payload = Object.assign({}, this.state.user, tmpPayload);
      this.setState({user: payload});
  }

  login = () => {
      if (!this.state.user.login || !this.state.user.password) {
          this.props.changeErrorMessage('Fill in all the fields');
      } else {
          this.props.signIn(this.state.user);
      }
  }

  render() {
    return (
      <View style={styles.container}>

       { this.props.errorMessage
            ? <Text style={styles.errorMessage}>{this.props.errorMessage}</Text>
            : null
       }

        <View style={{ flex: 0.2, justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={ styles.textInput }
                    onChangeText={(text) => this.onInputTextChange(text, 'login')}
                    value={this.state.user.login}
                    underlineColorAndroid={'transparent'}
                    placeholderTextColor={'#b5b3b3'}
                    placeholder="Login"
                    autoCapitalize={"none"}
                    onSubmitEditing={() => this.refs.password.focus()}
                    returnKeyType="next"
                />
            </View>
            <View style={[styles.inputContainer, { marginTop: 20 }]}>
                <TextInput
                    style={[styles.textInput]}
                    ref="password"
                    onChangeText={(text) => this.onInputTextChange(text, 'password')}
                    value={this.state.user.email}
                    underlineColorAndroid={'transparent'}
                    placeholderTextColor={'#b5b3b3'}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize={"none"}
                    onSubmitEditing={() => this.login()}
                    returnKeyType="send"
                />
            </View>
            <TouchableHighlight 
                style={styles.button}
                underlayColor={'transparent'}
                onPress={() => this.login()}
            >
                <Text style={styles.buttonText}>Sign in</Text>
            </TouchableHighlight>
        </View>
      </View>
    )
  }
}

Login.propTypes = {
  changeErrorMessage: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  errorMessage: PropTypes.string.isRequired,
};
