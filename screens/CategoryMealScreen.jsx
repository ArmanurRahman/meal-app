import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

const CategoryMealScreen = (props) => {
    const availableMeal = useSelector((state) => state.meal.filterMeals);
    const catId = props.navigation.getParam("categoryId");
    const displayMeal = availableMeal.filter(
        (meal) => meal.categoryId.indexOf(catId) >= 0
    );
    if (displayMeal.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text>Meal List Empty. Change your filter and try again!</Text>
            </View>
        );
    }
    return <MealList list={displayMeal} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
    };
};

const styles = StyleSheet.create({
    emptyContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
export default CategoryMealScreen;
