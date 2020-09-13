import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealScreen from "../screens/CategoryMealScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import Color from "../constants/Color";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FavouriteScreen from "../screens/FavouriteScreen";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import FilterScreen from "../screens/FilterScreen";

const defaultHeaderOption = {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor:
                Platform.OS === "android" ? Color.primaryColor : "",
        },
        headerTintColor:
            Platform.OS === "android" ? "white" : Color.primaryColor,
    },
};
const MealsNavigation = createStackNavigator(
    {
        Categories: CategoriesScreen,
        CategoryMeal: CategoryMealScreen,
        MealDetails: MealDetailsScreen,
    },
    defaultHeaderOption
);

const FavNavigation = createStackNavigator(
    {
        favourite: FavouriteScreen,
    },
    defaultHeaderOption
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
        screen: FavNavigation,
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

const filterNavigation = createStackNavigator(
    {
        Filters: FilterScreen,
    },
    defaultHeaderOption
);
const mainNavigation = createDrawerNavigator(
    {
        mealsFav: {
            screen: MealFavTabNavigation,
            navigationOptions: {
                drawerLabel: "Meals",
            },
        },
        Filters: filterNavigation,
    },
    {
        contentOptions: {
            activeTintColor: Color.accenColor,
            labelStyle: {
                fontFamily: "open-sans-bold",
            },
        },
    }
);
export default createAppContainer(mainNavigation);
