import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
    const renderItem = (itemData) => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() => onSelect(itemData.item.id)}
            />
        );
    };

    const onSelect = (id) => {
        props.navigation.navigate({
            routeName: "MealDetails",
            params: {
                mealId: id,
            },
        });
    };

    return (
        <View style={styles.list}>
            <FlatList
                data={props.list}
                keyExtractor={(item, index) => item.id}
                renderItem={renderItem}
                style={{ width: "100%" }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default MealList;
