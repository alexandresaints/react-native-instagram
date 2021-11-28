import React from 'react';
import {Image, View, TouchableOpacity, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Feed from '../screens/Feed';

import Navbar from '../components/Navbar';
import Login from '../screens/Login';

const Main = createNativeStackNavigator()

function Header(){
    return(
        <Feed/>
    )
}
function LoginScreen({navigation}){
    return(
        <>
        <TouchableOpacity style={{width: 355, top: 460, justifyContent: 'center', left: 20, zIndex: 1000}}>
            <Button 
            title='Entrar'
            onPress={() => navigation.navigate('Instagram')}
            />
        </TouchableOpacity>
        <Login/>

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
            <Main.Navigator initialRouteName="Login">
                <Main.Screen name='Instagram' component={Header} options={{ headerTitle: (props) => <LogoTitle {...props} />, headerBackVisible: false }}/>
                <Main.Screen name='Login' component={LoginScreen} options={{headerShown: false}} />
            </Main.Navigator>
        </NavigationContainer>
        </>
    )
}