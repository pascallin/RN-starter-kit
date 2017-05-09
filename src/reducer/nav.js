import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../navigator/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const initialState = AppNavigator.router.getStateForAction(firstAction);

export default function nav(state = initialState, action) {
   let nextState;
	switch (action.type) {
	case 'Pascal':
		nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Profile' }), state);
		break;
	case 'Lin':
		nextState = AppNavigator.router.getStateForAction(NavigationActions.navigate({ routeName: 'Profile' }), state);
		break;
	default:
		nextState = AppNavigator.router.getStateForAction(action, state);
		break;
	}
	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
}