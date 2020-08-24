import React from 'react'
import { View, Text, StyleSheet, Button, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const HomeScreen = (props) => {
    
    const navigation = useNavigation()

    const ListItem = ( props ) => (
        <View style={styles.list}>
          <Text>{props.category}</Text>
          <Text>$ {props.amount}</Text>
        </View>
      )

    const renderList = ({ item }) => (
        <ListItem 
            id={item.id} 
            amount={item.amount}
            category={item.category}
         />
    )

    const showDetails = ( item ) => {

    }

    return (
        <View>
            <Text>{props.text}</Text>
            {/*<Button title='Go to Detail' onPress={() => {navigation.navigate('Detail')}} />*/}
            <FlatList
                data={props.data}
                renderItem={renderList}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list:{
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
        flexDirection:'row',
        justifyContent: 'space-between',

    },
})