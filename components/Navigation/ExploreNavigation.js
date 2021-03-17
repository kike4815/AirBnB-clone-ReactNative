import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from '../../screens/Home'
import SearchResultsTabNavigator from '../../components/Navigation/SearchResultsTabNavigator'

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
                component={SearchResultsTabNavigator}
                options={{
                    headerShown:true,
                    title:'Search your destination'
                }}
            />
        </Stack.Navigator>
    )
 
}

export default ExploreNavigation
