import React from "react";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../components/HeaderIcon";
import { useSelector } from "react-redux";

const FavouriteScreen = (props) => {
    const favMeals = useSelector((state) => state.meal.favMeals);

    return <MealList list={favMeals} navigation={props.navigation} />;
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
