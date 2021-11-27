import React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Feed from '../screens/Feed';

import Navbar from '../components/Navbar';

const Main = createNativeStackNavigator()

function header(){
    return(
    <>
        <Feed/>
    </>
    )
}

function LogoTitle() {
    return (
        <Navbar/>   
    )
  }

export default function Route(){
    return(
        <>
        <NavigationContainer>
            <Main.Navigator>
                <Main.Screen name='Instagram' component={header} options={{ headerTitle: (props) => <LogoTitle {...props} /> }}/>
            </Main.Navigator>
        </NavigationContainer>
        </>
    )
}