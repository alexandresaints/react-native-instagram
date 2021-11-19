import React from "react";
import {View, SafeAreaView, FlatList, Image, StyleSheet, Text, TouchableOpacity, StatusBar } from "react-native";

import options from '../../assets/instagram-icons/options.png'
import like from '../../assets/instagram-icons/like.png'
import comment from '../../assets/instagram-icons/comment.png'
import send from '../../assets/instagram-icons/send.png'
import save from '../../assets/instagram-icons/save.png'

export default function Feed(){

    const posts = [
        {
            id: '1',
            author: 'alexandresaintss',
            picture_url: 'https://pbs.twimg.com/media/FEP_sIeXIAMql5z?format=jpg&name=large',
            likes: '50',
            description: 'Tô ansioso pra ver o Tobey e o Andrew! :o',
            hashtags: '#homemaranha #tobeymaguire #andrewgarfield #tomholland',
            place: 'Cinema do Shopping'
        },
        {
            id: '2',
            author: 'kamillasilva',
            picture_url: 'https://www.rbsdirect.com.br/imagesrc/25635820.jpg?w=700',
            likes: '186',
            description: 'Deixa seu like aí!',
            hashtags: '#sobrancelha #kamilla #designer #micro',
            place: 'Rio de Janeiro'
        },
        {
            id: '3',
            author: 'viajeaqui',
            picture_url: 'https://estadosunidosbrasil.com.br/files/2013/05/sanfrancisco-635x425.jpg',
            likes: '98',
            description: 'Venha fazer sua viagem internacional conosco!',
            hashtags: '#sanfrancisco #viagem #eua #viageminternacional',
            place: 'San Franscisco (EUA)'
        }

    ]

    function renderItem({ item: post }){
        return(
            <>
            <StatusBar barStyle="light-content" backgroundColor="#000"/>
            <View style={styles.post}>
                <View style={styles.postHeader}>
                    <View style={styles.userInfo}>
                        <Text style={styles.author}>{post.author}</Text>
                        <Text style={styles.place}>{post.place}</Text>
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
                        <Text style={styles.likes}>{post.likes} likes</Text>
                        <Text style={styles.description}>{post.description}</Text>
                        <Text style={styles.hashtags}>{post.hashtags}</Text>
                    </View>
                </View>
            </View>
            </>
        )
    }

    return(
        <SafeAreaView>
            <FlatList
                data={posts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    post: {
        marginVertical: 15
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
        fontWeight: 'bold'

    },
    place: {
        fontSize: 12,
        color: '#666'
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
        fontSize: 16,
        fontWeight: 'bold'
    },
    hashtags: {
        color: '#002d5e'
    },
    description: {
        color: '#000',
        lineHeight: 18
    }
})