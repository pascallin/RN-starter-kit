import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView
} from 'react-native'
import {
	Button
} from 'react-native-elements'
import { 
	Card 
} from 'react-native-material-design';
import { connect } from 'react-redux';
import FadeInView from '../component/FadeInView'

const AwesomeProject = class MainScreen extends Component {
    static navigationOptions = { title: 'Welcome', };
	constructor(props){
		super(props)
		this.textInput = ""
	}
    render() {
      const { navigate } = this.props.navigation;
	  const { who1, who2, getUser, text } = this.props;
	  this.textInput = text
      return (
        <ScrollView>
			<Card>
			<Button 
				title="Go to Pascal's profile" 
				onPress={ who1 } 
				backgroundColor='deepskyblue'
			/>
			<Button 
				title="Go to Lin's profile" 
				onPress={ who2 } 
				backgroundColor='dodgerblue'
			/>
			<Button 
				title="Who is the user" 
				onPress={ getUser } 
				backgroundColor='black'
			/>
		  </Card>
          <View style={styles.container}>
			  <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}> 
					<Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text> 
				</FadeInView>
              <Text style={styles.welcome}>
                  Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
                  To get started, edit index.ios.js
              </Text>
              <Text style={styles.instructions}>
                  Press Cmd+R to reload,{'\n'}
                  Cmd+D or shake for dev menu
              </Text>
			  <TextInput style={{height: 40}} placeholder="Type here to translate!" 
			  	onChangeText={(input) => {this.textInput = input}}
				defaultValue={text}
				returnKeyType="done"
				/>
			<Text style={{padding: 10, fontSize: 42}}>
				{this.textInput.split(' ').map((word) => word && '🍕').join(' ')}
			</Text>
			{[...Array(3)].map(function(value,i){
				return <Text style={styles.scroll} key={i}>Scroll me plz</Text>;
			})}
          </View>
        </ScrollView>
      );
  }
}

const mapStateToProps = state => ({
	text: state.user.text
});

const mapDispatchToProps = dispatch => ({
  who1: () => dispatch({ type: 'Pascal' }),
  who2: () => dispatch({ type: 'Lin' }),
  getUser: () => dispatch({ type: 'FETCH_REQUESTED' })
});

export default connect(mapStateToProps, mapDispatchToProps)(AwesomeProject);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  scroll: {
	  fontSize:96
  }
});