import React from "react";
import {View, SafeAreaView, FlatList, Image, StyleSheet, Text, TouchableOpacity, StatusBar, ScrollView } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import Stories from '../../components/Stories/index'

import options from '../../assets/instagram-icons/options.png'
import like from '../../assets/instagram-icons/like.png'
import comment from '../../assets/instagram-icons/comment.png'
import send from '../../assets/instagram-icons/send.png'
import save from '../../assets/instagram-icons/save.png'

import kamilla from'../../assets/images/kamilla.png'
import alexandre from'../../assets/images/alexandre.png'
import viagem from'../../assets/images/viagem.png'

export default function Feed(){

    const posts = [
        {
            id: '1',
            photo: alexandre,
            author: 'alexandresaintss',
            picture_url: 'https://pbs.twimg.com/media/FEP_sIeXIAMql5z?format=jpg&name=large',
            likes: 'outras 50 pessoas',
            description: 'Tô ansioso pra ver o Tobey e o Andrew! :o',
            hashtags: '#homemaranha #tobeymaguire #andrewgarfield #tomholland',
            place: 'Cinema do Shopping',
            time: '26'
        },
        {
            id: '2',
            photo: kamilla,
            author: 'kamillasilva',
            picture_url: 'https://www.rbsdirect.com.br/imagesrc/25635820.jpg?w=700',
            likes: 'outras 186 pessoas',
            description: 'Deixa seu like aí!',
            hashtags: '#sobrancelha #kamilla #designer #micro',
            place: 'Rio de Janeiro',
            time: '35'
        },
        {
            id: '3',
            photo: viagem,
            author: 'viajeaqui',
            picture_url: 'https://estadosunidosbrasil.com.br/files/2013/05/sanfrancisco-635x425.jpg',
            likes: 'outras 98 pessoas',
            description: 'Venha fazer sua viagem internacional conosco!',
            hashtags: '#sanfrancisco #viagem #eua #viageminternacional',
            place: 'San Franscisco',
            time: '50'
        }

    ]

    function renderItem({ item: post }){
        return(
            <>
            <StatusBar barStyle="light-content" backgroundColor="#000"/>
            <View style={styles.post}>
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <View style={styles.authorContainer}>
                            <TouchableOpacity>
                                <Image source={post.photo} style={styles.photo}/>
                            </TouchableOpacity>
                        <View style={styles.containerInfo}>
                            <Text style={styles.author}>{post.author}</Text>
                            <Text style={styles.place}>{post.place}</Text>
                        </View>
                        </View>
                    </View>

                    <View style={styles.postOptions}>
                        <TouchableOpacity>
                            <Image source={options} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <Image style={styles.picture_url} //uri é pra pegar imagens em link com post
                    source={{uri: post.picture_url}} />
                </View>

                <View style={styles.footer}>
                    <View style={styles.actions}>
                        <View style={styles.leftActions}>
                            <TouchableOpacity style={styles.action}>
                                <Image source={like} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.action}>
                                <Image source={comment} />
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image source={send} />
                            </TouchableOpacity>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.action}>
                                <Image source={save} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.likes}>Curtido por oipedrohenry e {post.likes}</Text>
                        <View style={styles.authorContainer}>
                            <Text style={styles.author}>{post.author} </Text>
                            <Text style={styles.description}>{post.description}</Text>
                        </View>
                        <Text style={styles.hashtags}>{post.hashtags}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={post.photo} style={styles.photoComment}/>
                        <TextInput placeholder='Adicione um comentário...' placeholderTextColor="#878787" style={styles.input}>{post.input}</TextInput>
                        </View>
                        <Text style={styles.time}>há {post.time} minutos</Text>
                    </View>
                </View>
            </View>
            </>
        )
    }

    return(
        <SafeAreaView>
            <FlatList
                style={{backgroundColor: 'white'}}
                data={posts}
                ListHeaderComponent={Stories}
                header={Stories}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    post: {
        marginVertical: 10
    },

    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 15
    },
    postOptions: {},
    userInfo: {},
    author: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',

    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    containerInfo: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 5
    },
    place: {
        fontSize: 12,
        color: '#666',
        color: '#878787'
    },
    photo: {
        width: 40,
        height: 40,
        borderRadius: 50
    },
    photoComment: {
        width: 25,
        height: 25,
        borderRadius: 50
    },
    picture_url: {
        width: '100%',
        height: 400
    },
    footer: {
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,
    },
    action: {
        marginRight: 8
    },
    leftActions: {
        flexDirection: 'row'
    },
    likes: {
        fontSize: 14,
        color: '#878787',
        fontWeight: 'bold'
    },
    hashtags: {
        color: '#002d5e'
    },
    description: {
        color: '#000',
        lineHeight: 18
    },
    input: {
        color: '#000',
        borderColor: 'gray',
        lineHeight: 18
    },
    time: {
        fontSize: 12,
        color: '#878787',
        marginLeft: 5
    }
})