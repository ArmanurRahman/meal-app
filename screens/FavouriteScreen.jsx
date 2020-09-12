import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavouriteScreen = (props) => {
    const favItem = MEALS.filter(
        (meal) => meal.id === "m1" || meal.id === "m2"
    );
    console.log(favItem);
    return <MealList list={favItem} navigation={props.navigation} />;
};

FavouriteScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: "Your Favourite",
    };
};

export default FavouriteScreen;
