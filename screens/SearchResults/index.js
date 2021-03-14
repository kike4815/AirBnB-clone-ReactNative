import React from 'react'
import { View, FlatList } from 'react-native'
import Post from '../Post'
import feed from '../../assets/data/feed'

const Search = () => {
    return (
        <View>
            <FlatList
            data={feed}
            renderItem = {({item}) => (
                <Post post={item} />
                )}
            />
        </View>
    )
}

export default Search
