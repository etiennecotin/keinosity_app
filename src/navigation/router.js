import * as React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import HomeScreen from "../screens/homeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import EventScreen from "../screens/EventScreen";
import ReportingScreen from "../screens/ReportingScreen";
import ProfilScreen from "../screens/ProfilScreen";
import Ionicons from "react-native-vector-icons/Feather";
import LoginScreen from "../screens/loginScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import {Image} from "react-native";

const LoginNavigator = createStackNavigator(
    {
        Home: LoginScreen,
    },
    {
        headerMode: "none",
    }
);
LoginNavigator.navigationOptions = {
    header: null,
};

const HomeNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: "Home",
    }
);
HomeNavigator.navigationOptions = {
    tabBarLabel: 'Projet',
    tabBarIcon: ({ focused }) => (
        <Ionicons
            name="briefcase"
            size={25}
            color={focused ? '#4d8fef' : 'grey'}
        />
    ),
};

const EventNavigator = createStackNavigator(
    {
        Home: EventScreen,
    },
    {
        initialRouteName: "Home"
    }
);
EventNavigator.navigationOptions = {
    tabBarLabel: 'Evenement',
    tabBarIcon: ({ focused }) => (
        <Ionicons
            name="bell"
            size={25}
            color={focused ? '#4d8fef' : 'grey'}
        />
    ),
};

const ReportingNavigator = createStackNavigator(
    {
        Home: ReportingScreen,
    },
    {
        initialRouteName: "Home"
    }
);
ReportingNavigator.navigationOptions = {
    tabBarLabel: 'Signalement',
    tabBarIcon: ({ focused }) => (
        <Ionicons
            name="bell"
            size={25}
            color={focused ? '#4d8fef' : 'grey'}
        />
    ),
};

const ProfilNavigator = createStackNavigator(
    {
        Home: ProfilScreen,
    },
    {
        initialRouteName: "Home"
    }
);
ProfilNavigator.navigationOptions = {
    tabBarLabel: 'Profile',
    tabBarIcon: ({ focused }) => (
        <Ionicons
            name="user"
            size={25}
            color={focused ? '#4d8fef' : 'grey'}
        />
    ),
};

const App = createBottomTabNavigator(
    {
        HomeApp: HomeNavigator,
        Event: EventNavigator,
        Reporting: ReportingNavigator,
        Profil: ProfilNavigator,
    },
);
const RootSwitch = createSwitchNavigator({
        AuthLoading: AuthLoadingScreen,
        LoginNavigator: LoginNavigator,
        App: App
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

export default createAppContainer(RootSwitch);