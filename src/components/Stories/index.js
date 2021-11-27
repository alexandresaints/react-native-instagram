import React from "react";
import {FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

import kamilla from'../../assets/images/kamilla.png'
import alexandre from'../../assets/images/alexandre.png'
import viagem from'../../assets/images/viagem.png'

export default function Stories(){

    const posts = [
        {
            id: '1',
            photo: alexandre
        },
        {
            id: '2',
            photo: kamilla
        },
        {
            id: '3',
            photo: viagem
        },
        {
            id: '4',
            photo: alexandre
        },
        {
            id: '5',
            photo: kamilla
        },
        {
            id: '6',
            photo: viagem
        }

    ]

    function renderItem({ item: post }){
        return(
                <TouchableOpacity style={styles.storiesContainer}>
                    <Image source={post.photo} style={styles.stories}/>
                </TouchableOpacity>
        )
    }

    return(
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} pagingEnabled={false}>
            <FlatList
                style={styles.storiesContainer}
                data={posts}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    storiesContainer: {
        flexDirection: 'row',
        padding: 8
    },

    stories: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderColor: 'red'
    },

})