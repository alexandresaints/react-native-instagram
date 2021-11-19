import React from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Feed from '../screens/Feed';

import logo from '../assets/instagram-icons/logo.png'
import igtv from '../assets/instagram-icons/igtv.png'
import send from '../assets/instagram-icons/send.png'
import camera from '../assets/instagram-icons/camera.png'
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    <>
        <View style={{marginHorizontal: 0, flexDirection: 'row',}}>
                <TouchableOpacity style={{marginRight: 110}}>
                    <Image source={camera}/>
                </TouchableOpacity>
            <Image
                source={logo}
            />
            <View style={{flexDirection: 'row', marginLeft: 100}}>
                <TouchableOpacity style={{marginRight: 10}}>
                    <Image source={igtv}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={send}/>
                </TouchableOpacity>
            </View>
        </View>
    </>
    );
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