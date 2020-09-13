import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../components/HeaderIcon";

const FavouriteScreen = (props) => {
    const favItem = MEALS.filter(
        (meal) => meal.id === "m1" || meal.id === "m2"
    );
    console.log(favItem);
    return <MealList list={favItem} navigation={props.navigation} />;
};

FavouriteScreen.navigationOptions = (navdata) => {
    return {
        headerTitle: "Your Favourite",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
                <Item
                    title='menu'
                    iconName='ios-menu'
                    onPress={() => {
                        navdata.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
};

export default FavouriteScreen;
