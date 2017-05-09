import React, { PropTypes } from 'react'
import { connect } from 'react-redux';

import { 
  StackNavigator,
  TabNavigator,
  addNavigationHelpers
} from 'react-navigation';

import MainScreen from '../screen/MainScreen'
import ProfileScreen from '../screen/ProfileScreen'
import ScrollableTabScreen from '../screen/ScrollableTabScreen'

const MainScreenNavigator = StackNavigator({ 
  Main: {screen: MainScreen}, 
  Profile: {screen: ProfileScreen}, 
});

export const AppNavigator = TabNavigator({
  Recent: { screen: ScrollableTabScreen },
  All: { screen: MainScreenNavigator },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);