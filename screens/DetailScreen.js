import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

export const DetailScreen = (props) => {
    return (
        <View>
            <Text>Detail Page</Text>
            <Text>ID: {props.route.params.id}</Text>
            <Text>{props.route.params.category}</Text>
            <Text>{props.route.params.amount}</Text>
            <Text>{props.route.params.note}</Text>
        </View>
    )
}