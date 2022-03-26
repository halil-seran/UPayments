import React from "react";
import { View, StyleSheet } from 'react-native';

export const ProductCard = props => {
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: { width: 2, height: 3 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white'
    }
});
