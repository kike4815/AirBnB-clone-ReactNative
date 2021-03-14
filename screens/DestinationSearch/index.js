import React,{useState} from 'react'
import { View, Text,TextInput,FlatList } from 'react-native'
import search from '../../assets/data/search'
import styles from './styles'
import Entipo from 'react-native-vector-icons/Entypo'

const DestinationSearch = () => {
    const [textInput, setTextInput] = useState('')

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
                <View style={styles.row}>
                    <View style={styles.iconContainer}>
                    <Entipo name={'location-pin'} size={30}/>
                    </View>
                    <Text style={styles.locationText}>{item.description}</Text>
                </View>
            )}
            />
        </View>
    )
}

export default DestinationSearch
