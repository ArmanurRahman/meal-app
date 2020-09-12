import React from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
    const catId = props.navigation.getParam("categoryId");
    const displayMeal = MEALS.filter(
        (meal) => meal.categoryId.indexOf(catId) >= 0
    );

    return <MealList list={displayMeal} navigation={props.navigation} />;
};

CategoryMealScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId");
    const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
    return {
        headerTitle: selectedCategory.title,
    };
};

export default CategoryMealScreen;
