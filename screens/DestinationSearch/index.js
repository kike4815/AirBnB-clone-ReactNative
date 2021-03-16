import React,{useState} from 'react'
import { View, Text,TextInput,FlatList,Pressable } from 'react-native'
import search from '../../assets/data/search'
import styles from './styles'
import Entipo from 'react-native-vector-icons/Entypo'
import {useNavigation} from '@react-navigation/native'

const DestinationSearch = () => {
    const [textInput, setTextInput] = useState('')

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <TextInput 
            placeholder={'Where are you going?'}
            style={styles.textInput}
            value={textInput}
            onChangeText={setTextInput}
            />
            <FlatList 
            data={search}
            renderItem={({item}) =>(
                <Pressable 
                style={styles.row}
                onPress={()=> navigation.navigate('Guests')}
                >
                    <View style={styles.iconContainer}>
                    <Entipo name={'location-pin'} size={30}/>
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </Pressable>
            )}
            />
        </View>
    )
}

export default DestinationSearch
