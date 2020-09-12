import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import Color from "../constants/Color";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavouriteScreem from "../screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const MealsNavigation = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeal: CategoryMealScreen,
        MealDetails: MealDetailsScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor:
                    Platform.OS === "android" ? Color.primaryColor : "",
            },
            headerTintColor:
                Platform.OS === "android" ? "white" : Color.primaryColor,
        },
    }
);

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigation,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name='ios-restaurant'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
            tabBarColor: Color.primaryColor,
        },
    },
    Favourites: {
        screen: FavouriteScreem,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons
                        name='ios-star'
                        size={25}
                        color={tabInfo.tintColor}
                    />
                );
            },
            tabBarColor: Color.accenColor,
        },
    },
};
const MealFavTabNavigation =
    Platform.OS === "android"
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
              activeColor: "white",
              shifting: true,
          })
        : createBottomTabNavigator(tabScreenConfig, {
              tabBarOptions: {
                  activeTintColor: Color.accenColor,
              },
          });
export default createAppContainer(MealFavTabNavigation);
