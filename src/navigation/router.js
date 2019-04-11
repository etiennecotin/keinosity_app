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
import AddReportingScreen from "../screens/AddReportingScreen";
import AddProjectScreen from "../screens/AddProjectScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LocationScreen from "../screens/LocationScreen";
import {Image} from "react-native";
import {EventIcon} from "../components/icons";

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
        Details: DetailsScreen,
        AddReporting: AddReportingScreen,
        AddProject: AddProjectScreen,
        Location: LocationScreen,
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
        AddReporting: AddReportingScreen,
        AddProject: AddProjectScreen,
    },
    {
        initialRouteName: "Home"
    }
);
EventNavigator.navigationOptions = {
    tabBarLabel: 'Evenement',
    tabBarIcon: ({ focused }) => (
        <EventIcon
            stroke={focused ? '#4d8fef' : 'grey'}
        />
    ),
};

const ReportingNavigator = createStackNavigator(
    {
        Home: ReportingScreen,
        AddReporting: AddReportingScreen,
        AddProject: AddProjectScreen,
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
        Details: DetailsScreen,
        AddReporting: AddReportingScreen,
        AddProject: AddProjectScreen,
        Settings: SettingsScreen,
    },
    {
        initialRouteName: "Home",
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
        Reporting: ReportingNavigator,
        Event: EventNavigator,
        Profil: ProfilNavigator,
    },
    {
        tabBarOptions: {
            style: {
                height: 50,
                zIndex: 200
            },
        }
    }
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