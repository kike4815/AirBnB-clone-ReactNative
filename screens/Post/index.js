import React from 'react'
import { View, Text,Image } from 'react-native'
import styles from './styles'

const Post = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:"https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg"}}/>
            <Text style={styles.bedroom}>1 bed 1 bedroom</Text>
            <Text style={styles.description} 
            numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur efficitur, eros mollis varius facilisis, urna turpis vestibulum risus, vitae luctus quam leo vel tellus. Sed at nunc a elit condimentum semper. Donec nunc augue, condimentum a gravida vel, fringilla vel libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec id lectus blandit, hendrerit nisi ut, vestibulum odio. Vestibulum aliquet accumsan nisl, a congue sapien bibendum dignissim. </Text>
            <Text style={styles.prices}>
                <Text style={styles.oldprice}>$36</Text>
                <Text style={styles.price}> $30</Text>
                / night
            </Text>
            <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    )
}

export default Post
