import React from "react";
import {View, Image, TouchableOpacity, StyleSheet } from "react-native";

import logo from '../../assets/instagram-icons/logo.png'
import igtv from '../../assets/instagram-icons/igtv.png'
import send from '../../assets/instagram-icons/send.png'
import camera from '../../assets/instagram-icons/camera.png'

export default function Navbar(){
        return(
            <>
    <View style={{flexDirection: 'row'}}>

        <Image source={logo} style={styles.logo}/>

    <View style={{flexDirection: 'row', marginLeft: 160}}>

        <TouchableOpacity>
            <Image source={camera} style={{marginRight: 15}}/>
        </TouchableOpacity>

        <TouchableOpacity>
            <Image source={igtv}/>
        </TouchableOpacity>

        <TouchableOpacity>
            <Image source={send} style={{marginLeft: 15}}/>
        </TouchableOpacity>

    </View>
    </View>
        </>
    )
}

const styles = StyleSheet.create({

    logo: {
        marginHorizontal: 10
    },

})
    
