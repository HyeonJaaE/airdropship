import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExampleComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is an example component!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default ExampleComponent;