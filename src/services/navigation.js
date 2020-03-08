import { NavigationActions } from 'react-navigation';

const config = {};

function setNavigator(nav) {
  if (nav) {
    config.navigator = nav;
  }
}
function navigate(routeName, params) {
  if (config.navigator && routeName) {
    const action = NavigationActions.navigate({ routeName, params });
    config.navigator.dispatch(action);
  }
}

export default { setNavigator, navigate };
