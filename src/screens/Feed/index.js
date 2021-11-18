import React from "react";
import {View, FlatList, Image, StyleSheet, Text, TouchableOpacity, StatusBar } from "react-native";

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
            likes: '',
            description: '',
            hashtags: '',
            place: 'Cinema do Shopping'
        },

    ]

    function renderItem({ item: post }){
        return(
            <>
            <StatusBar barStyle="light-content" backgroundColor="#FFF" />
            <View>
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
                        <View style={styles.leftAction}>
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
                    <View style={styles.likes}></View>
                    <View style={styles.comment}></View>
                </View>
            </View>
            </>
        )
    }

    return(
        <View>
            <FlatList
                data={posts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center'
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
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action: {
        marginRight: 8
    },
    leftAction: {
        flexDirection: 'row'
    }
})