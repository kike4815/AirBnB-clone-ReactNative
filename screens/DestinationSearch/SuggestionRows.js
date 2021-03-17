import React from 'react'
import { View,Text } from 'react-native'
import Entipo from "react-native-vector-icons/Entypo";
import styles from './styles'

const SuggestionRows = ({item}) => (
    
        <View
            style={styles.row}
            onPress={() => navigation.navigate("Guests")}
          >
            <View style={styles.iconContainer}>
              <Entipo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
    )


export default SuggestionRows
