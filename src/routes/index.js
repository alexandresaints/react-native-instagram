import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Feed from '../screens/Feed';

import logo from '../assets/instagram-icons/logo.png'

const Main = createNativeStackNavigator()

function header(){
    return(
    <>
        <Feed/>
    </>
    )
}

export default function Route(){
    return(
        <>
        <NavigationContainer>
            <Main.Navigator>
                <Main.Screen name='Instagram' component={header}/>
            </Main.Navigator>
        </NavigationContainer>
        </>
    )
}