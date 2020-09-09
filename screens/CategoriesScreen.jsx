import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is category screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoryScreen;