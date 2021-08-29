import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View,Image,Dimensions,ActivityIndicator, TouchableOpacity ,Linking} from 'react-native';
import {services} from '../Services';
import moment from 'moment';
import {Card} from 'react-native-elements';

export default function All() {
    const[newsData, setnewsData]= useState([]);
    const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
    useEffect(()=>{
        services('health')
        .then((data)=>{
            setnewsData(data)
        })
        .catch(error=>{
            alert(error)
        })
    })

     
    return (
            <FlatList
                    data={newsData}
                    renderItem={({item})=>(
                        <Card>
                            <View style={styles.newsContainer}>
                                <Image source={{uri:item.urlToImage}} style={{
                                // width:windowWidth/2,
                                // height:windowHeight/2,
                                aspectRatio:3/2,
                                resizeMode:'cover'}}
                                />
                                <TouchableOpacity onPress={()=>Linking.openURL(item.url)}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                </TouchableOpacity>
                                <Text style={styles.date}>
                                    {moment(item.publishedAt).format('LLL')}
                                </Text >
                                <Text style ={styles.newsDescription}>
                                    {item.description ||'Read more...'}
                                </Text>
                            </View>
                            </Card>
                    )}
                    keyExtractor={(item)=>item.id}
                    />
    )};
const styles= StyleSheet.create({
    newsContainer:{
        padding:10
    },
title:{
    fontSize:18,
    marginTop:10,
    fontWeight:"600"
},
newsDescription:{
    fontSize:16,
    marginTop:10
},
date:{
    fontSize:14
}
})