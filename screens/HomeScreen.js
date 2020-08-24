import React from 'react'
import { View, Text, StyleSheet, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = (props) => {
    const navigation = useNavigation()

    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='Go to Detail' onPress={() => {navigation.navigate('Detail')}} />
        </View>
    )
}

const styles = StyleSheet.create({

})