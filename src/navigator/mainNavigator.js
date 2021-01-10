import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings191508Navigator from '../features/Settings191508/navigator';
import UserProfile191501Navigator from '../features/UserProfile191501/navigator';
import Settings191500Navigator from '../features/Settings191500/navigator';
import Settings191498Navigator from '../features/Settings191498/navigator';
import SignIn2191496Navigator from '../features/SignIn2191496/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings191508: { screen: Settings191508Navigator },
UserProfile191501: { screen: UserProfile191501Navigator },
Settings191500: { screen: Settings191500Navigator },
Settings191498: { screen: Settings191498Navigator },
SignIn2191496: { screen: SignIn2191496Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
