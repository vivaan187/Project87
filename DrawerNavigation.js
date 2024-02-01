import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './navigation/TabNavigator';
import Profile from '../components/Profile';
import LogoutScreen from '../components/Logout';
import StackNavigator from './navigation/StackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = "Home" component ={StackNavigator}/>
            <Drawer.Screen name = "Profile" component={Profile}/>
            <Drawer.Screen name = "Logout" component={LogoutScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;