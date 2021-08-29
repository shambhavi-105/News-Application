import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View,Image,Dimensions,ActivityIndicator } from 'react-native';
import {services} from '../Services';
import moment from 'moment';

export default function All() {
    const[newsData, setnewsData]= useState([]);
    const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
    useEffect(()=>{
        services('sports')
        .then((data)=>{
            setnewsData(data)
        })
        .catch(error=>{
            alert(error)
        })
    })

     const FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              borderBottomColor:'black',
              borderBottomWidth:2
            }}
          />
        );
      }
    return (
            <FlatList
                    data={newsData}
                    renderItem={({item})=>(
                        <View>
                            <View style={styles.newsContainer}>
                                <Image source={{uri:item.urlToImage}} style={{
                                width:windowWidth,
                                height:windowHeight,
                                resizeMode:'contain'}}
                                />
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.date}>
                                    {moment(item.publishedAt).format('LLL')}
                                </Text >
                                <Text style ={styles.newsDescription}>
                                    {item.description}
                                </Text>
                            </View>

                        </View>
                    )}
                    keyExtractor={(item)=>item.id}
                    ItemSeparatorComponent={FlatListItemSeparator}
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