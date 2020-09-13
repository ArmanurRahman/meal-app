import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "./MealItem";
import { useSelector } from "react-redux";

const MealList = (props) => {
    const favMeal = useSelector((state) => state.meal.favMeals);

    const renderItem = (itemData) => {
        const isFav = favMeal.some((meal) => meal.id === itemData.item.id);

        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                image={itemData.item.imageUrl}
                onSelectMeal={() =>
                    onSelect(itemData.item.id, itemData.item.title, isFav)
                }
            />
        );
    };

    const onSelect = (id, title, isFavMeal) => {
        props.navigation.navigate({
            routeName: "MealDetails",
            params: {
                mealId: id,
                mealTitle: title,
                isFavMeal: isFavMeal,
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
