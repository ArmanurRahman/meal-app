import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../components/HeaderIcon";

const MealDetailScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>This is meal detail screen</Text>
        </View>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam("mealId");
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    return {
        headerTitle: selectedMeal.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
                <Item title='Fav' iconName='ios-star' onPress={() => {}} />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default MealDetailScreen;
