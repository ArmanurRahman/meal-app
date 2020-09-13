import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";

const CategoryMealScreen = (props) => {
    const availableMeal = useSelector((state) => state.meal.meals);
    const catId = props.navigation.getParam("categoryId");
    const displayMeal = availableMeal.filter(
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
