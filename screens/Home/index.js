import React from 'react'
import { View, Text,ImageBackground, Pressable } from 'react-native'
import styles from './style'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function HomeScreen() {
    return (
        <View>
            <Pressable style={styles.searchButton}
                onPress={()=> console.warn('search button clicked')}
                >
                    <Fontisto name='search' size={25} color={'#f15454'}/>
                    <Text style={styles.searchButtonText}>
                        Where are you going?
                    </Text>
                </Pressable>
            <ImageBackground 
            source={require('../../assets/images/wallpaper.jpg')} 
            style={styles.image}>
                <Text style={styles.title}>Go Near</Text>
                <Pressable style={styles.button}
                onPress={()=> console.warn('explore button clicked')}
                >
                    <Text style={styles.buttonText}>
                        Explore nearby stays
                    </Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}
