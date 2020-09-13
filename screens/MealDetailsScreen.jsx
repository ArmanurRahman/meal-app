import React, { useCallback, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderIcon from "../components/HeaderIcon";
import { useSelector, useDispatch } from "react-redux";
import { toggleFav } from "../store/action/meal";

const ListItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.children}</Text>
        </View>
    );
};
const MealDetailScreen = (props) => {
    const mealId = props.navigation.getParam("mealId");

    const availableMeals = useSelector((state) => state.meal.meals);
    const favMeals = useSelector((state) => state.meal.favMeals);
    const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
    const currentMealIsFavourite = favMeals.some((meal) => meal.id === mealId);

    const dispatch = useDispatch();

    const toggleFavouriteHandler = useCallback(() => {
        dispatch(toggleFav(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({ toggleFav: toggleFavouriteHandler });
    }, [toggleFavouriteHandler]);

    useEffect(() => {
        props.navigation.setParams({
            isFavMeal: currentMealIsFavourite,
        });
    }, [currentMealIsFavourite]);
    return (
        <ScrollView>
            <View style={styles.screen}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: selectedMeal.imageUrl }}
                        style={styles.image}
                    />
                </View>

                <View style={styles.detailContainer}>
                    <Text>{selectedMeal.duration}m</Text>
                    <Text>{selectedMeal.affordability.toUpperCase()}</Text>
                    <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                </View>
                <Text style={styles.title}>Ingredients</Text>

                {selectedMeal.ingredients.map((ingredian) => {
                    return <ListItem key={ingredian}>{ingredian}</ListItem>;
                })}
                <Text style={styles.title}>Steps</Text>

                {selectedMeal.steps.map((step) => {
                    return <ListItem key={step}>{step}</ListItem>;
                })}
            </View>
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam("mealTitle");
    const toggleFavourite = navigationData.navigation.getParam("toggleFav");
    const isFavMeal = navigationData.navigation.getParam("isFavMeal");

    return {
        headerTitle: mealTitle,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderIcon}>
                <Item
                    title='Fav'
                    iconName={isFavMeal ? "ios-star" : "ios-star-outline"}
                    onPress={toggleFavourite}
                />
            </HeaderButtons>
        ),
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
    },
    imageContainer: {
        height: 250,
        borderRadius: 15,
        overflow: "hidden",
        margin: 10,
        elevation: 5,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
    },
    image: {
        width: "100%",
        height: "100%",
    },
    detailContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#fff",
        padding: 10,
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
        textAlign: "center",
    },
    listItem: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        borderColor: "#ccc",
        borderWidth: 2,
    },
});

export default MealDetailScreen;
