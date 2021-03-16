import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../../screens/Home'
import SearchResults from '../../screens/SearchResults'

const Stack = createStackNavigator()

const ExploreNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name={'Welcome'}
                component={HomeScreen}
                options={{
                    headerShown:false,
                }}
            />
            <Stack.Screen 
                name={'SearchResults'}
                component={SearchResults}
                options={{
                    headerShown:false,
                }}
            />
        </Stack.Navigator>
    )

}

export default ExploreNavigation
