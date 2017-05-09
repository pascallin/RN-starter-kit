import React, { Component, PropTypes } from 'react'
import {
  Text,
  Button,
} from 'react-native'
import { connect } from 'react-redux';

const ProfileMessage = class Profile extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params ? navigation.state.params.title : ""
  })
  setTitle()
    {
      const title = this.props.name ? this.props.name : "";
      this.props.navigation.setParams({title: title});
    }
	componentWillMount() {
      this.setTitle();
    }

  render(){
	const { name } = this.props
    return (
      <Text>I am {name}</Text>
    )
  }
}

ProfileMessage.propTypes = {
  name: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  name: state.who.name
});

export default connect(mapStateToProps)(ProfileMessage);