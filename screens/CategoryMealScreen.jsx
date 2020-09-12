import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import Meal from "../models/meals";

const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam("categoryId");
    const displayMeal = MEALS.filter(
        (meal) => meal.categoryId.indexOf(catId) >= 0
    );

    const onSelect = (id) => {
        props.navigation.navigate({
            routeName: "MealDetails",
            params: {
                mealId: id,
            },
        });
    };
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
    return (
        <View style={styles.screen}>
            <FlatList
                data={displayMeal}
                keyExtractor={(item, index) => item.id}
                renderItem={renderItem}
                style={{ width: "100%" }}
            />
        </View>
    );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
    };
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoryMealScreen;
