import React from "react";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../components/HeaderIcon";
import { useSelector } from "react-redux";
import { View, Text, StyleSheet } from "react-native";

const FavouriteScreen = (props) => {
    const favMeals = useSelector((state) => state.meal.favMeals);

    if (favMeals.length === 0) {
        return (
            <View style={styles.empty}>
                <Text>Favorite list is empty. Please add some!!</Text>
            </View>
        );
    }
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

const styles = StyleSheet.create({
    empty: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default FavouriteScreen;
