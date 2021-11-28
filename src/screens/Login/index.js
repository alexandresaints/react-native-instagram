import React from "react";
import {View, SafeAreaView, FlatList, Image, StyleSheet, Text, TouchableOpacity, StatusBar, ScrollView, Button } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Input, LoginButton} from './styles'
import Feed from "../Feed";

import logo from '../../assets/instagram-icons/logo.png'

export default function Login({navigation}){
    return(
        <SafeAreaView>
            <View style={styles.post}>
                <Text style={{bottom: 190}}>português (Brasil)</Text>
                <View>
                    <Image source={logo} style={{width: 235, height: 66}} />
                </View>

                <View>
                    <Input placeholder='Número de telefone, email ou nome de usuário'></Input>
                    <Input placeholder='Senha' secureTextEntry={true}></Input>
                </View>

                <TouchableOpacity style={{width: 355, top: 10, zIndex: 1}}>
                    <LoginButton 
                    title='Entrar'
                    onPress={() => navigation.navigate('Feed')}
                    />
                </TouchableOpacity>

                <View style={styles.helpText}>
                    <Text style={{fontSize: 12}}>Esqueceu seus dados de login?</Text>
                    <TouchableOpacity>
                    <Text style={styles.link}> Obtenha ajuda para entrar.</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection: 'row', alignItems: 'center', top: 40}}>
                    <View style={{flex: 2, height: 1, backgroundColor: 'black'}} />
                    <View>
                        <Text style={styles.lineText}>OU</Text>
                    </View>
                    <View style={{flex: 2, height: 1, backgroundColor: 'black'}} />
                </View>

                <TouchableOpacity style={{width: 355, top: 50}}>
                    <LoginButton title='Continuar como Alexandre Saints'/>
                </TouchableOpacity>

                <View style={{top: 180, alignItems: 'center'}}>
                    <View style={{height: 1, backgroundColor: 'black', width: 400}} />
                    <View style={{flexDirection: 'row', top: 10}}>
                        <Text style={{fontSize: 12}}>Não tem conta?</Text>
                            <TouchableOpacity>
                            <Text style={{fontWeight: 'bold', color: '#060B41', fontSize: 12}}> Cadastre-se.</Text>
                            </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    post: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 200,
    },
    helpText: {
        flexDirection: 'row',
        fontSize: 15,
        top: 20
    },
    link: {fontWeight: 'bold', color: '#060B41', fontSize: 12},

    lineText: {width: 30, textAlign: 'center', fontWeight: 'bold'}
})